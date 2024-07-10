"use client";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { quotationValidationSchema } from "@/lib/validations/quotation.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the service state type
interface Service {
  name: string;
  quantity: string;
  unitPrice: string;
  totalPrice: string;
}

const QuotationPage = () => {
  // State variables
  const [services, setServices] = useState<Service[]>([]);
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "Home FIX",
    quotationNumber: "",
    date: new Date().toISOString().split("T")[0],
  });

  // Automatically generate quotation number based on the date with incrementing number
  useEffect(() => {
    let initialQuotationNumber = 1; // Initial number for incrementing
    const generateQuotationNumber = () => {
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month with leading zero if needed
      const day = date.getDate().toString().padStart(2, "0"); // Day with leading zero if needed
      const quotationNumber = `${year}${month}${day}${initialQuotationNumber
        .toString()
        .padStart(3, "0")}`;
      initialQuotationNumber++; // Increment for the next quotation number
      return `Q-${quotationNumber}`;
    };
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      quotationNumber: generateQuotationNumber(),
    }));
  }, []);

  // 1. Define the form.
  const form = useForm<z.infer<typeof quotationValidationSchema>>({
    resolver: zodResolver(quotationValidationSchema),
    defaultValues: {
      name: "",
      quantity: "",
      unitPrice: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (
    values: z.infer<typeof quotationValidationSchema>
  ) => {
    // Calculate the total price
    const totalPrice = (
      parseFloat(values.quantity) * parseFloat(values.unitPrice)
    ).toFixed(2);

    // Append the new service to the existing state
    setServices((prevServices) => [...prevServices, { ...values, totalPrice }]);
  };

  // Function to remove a service by index
  const removeService = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return services
      .reduce((acc, service) => acc + parseFloat(service.totalPrice), 0)
      .toFixed(2);
  };

  const downloadPdf = () => {
    const doc = new jsPDF();

    // Company information
    doc.text(`Company Name: ${companyInfo.companyName}`, 10, 10);
    doc.text(`Quotation Number: ${companyInfo.quotationNumber}`, 10, 30);
    doc.text(`Date: ${companyInfo.date}`, 10, 40);

    // Table header
    const tableColumn = ["#", "Name", "Quantity", "Unit Price", "Total Price"];
    const tableRows: string[][] = [];
    let startY = 50;

    // Table body
    services.forEach((service, index) => {
      const serviceData = [
        (index + 1).toString(),
        service.name,
        service.quantity,
        service.unitPrice,
        service.totalPrice,
      ];
      tableRows.push(serviceData);
    });

    // Generate table
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY,
    });

    // Calculate subtotal
    const subtotal = calculateSubtotal();

    // Position subtotal at the bottom right of the table
    const tableBottomY = doc.lastAutoTable.finalY + 10; // Bottom of the table
    const subtotalText = `Subtotal: $${subtotal}`;
    const subtotalWidth =
      (doc.getStringUnitWidth(subtotalText) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;

    doc.text(
      subtotalText,
      doc.internal.pageSize.width - subtotalWidth - 10,
      tableBottomY
    );

    // Note
    const note = `Note: The above price quoted based on the job to be carried
    out during normal working hours (9 am-5 pm) not included
    public holiday dates - Any workers health test fees exclude
    quotation - Any additional parts found faulty/ works related
    need to be replaced during repair/replacement/shutdown
    services job`;
    const noteLines = doc.splitTextToSize(
      note,
      doc.internal.pageSize.width - 20
    ); // Split note into lines
    const noteHeight = noteLines.length * 10; // Height of note text
    const noteY = tableBottomY + 10; // Position note below table
    doc.text(noteLines, 10, noteY);

    // Authority signature placeholder
    const authoritySignatureY = noteY + noteHeight + 10; // Position authority signature below note
    doc.text("Authority Signature:", 10, authoritySignatureY);

    // Customer signature placeholder
    const customerSignatureX = doc.internal.pageSize.width / 2;
    doc.text("Customer Signature:", customerSignatureX, authoritySignatureY);

    // Save PDF
    doc.save("quotation.pdf");
  };

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        {/* Download PDF Button */}
        <div className="flex justify-between items-center">
          <div className="mt-4">
            <Button variant="secondary" onClick={downloadPdf}>
              Download PDF
            </Button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add New</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex w-full flex-col gap-6"
                    >
                      {/* Service Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Name <span className="text-amber-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your product name here"
                                className="text-muted-foreground"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      {/* Quantity */}
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Quantity <span className="text-amber-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Quantity of your product"
                                className="text-muted-foreground"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      {/* Unit Price */}
                      <FormField
                        control={form.control}
                        name="unitPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Unit Price{" "}
                              <span className="text-amber-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Unit price of your product"
                                className="text-muted-foreground"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button type="submit">Add</Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Render the services in a table */}
        <Table className="mt-10 w-full overflow-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead className="text-right">Total Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell className="text-right">{service.quantity}</TableCell>
                <TableCell className="text-right">
                  {service.unitPrice}
                </TableCell>
                <TableCell className="text-right">
                  {service.totalPrice}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    onClick={() => removeService(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </MaxWidthWrapper>
    </section>
  );
};

export default QuotationPage;
