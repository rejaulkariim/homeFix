"use client";

import { useState } from "react";
import { Margin, usePDF } from "react-to-pdf";
import { Button } from "../ui/button";
import ServiceItem from "./ServiceItem";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

// Initial state for a service
interface InitialServiceState {
  serviceName: string;
  quantity: string;
  unitPrice: string;
  totalPrice: string;
}

// Main component for generating a quotation
const GenQuotation: React.FC = () => {
  // State variables
  const [services, setServices] = useState<InitialServiceState[]>([
    {
      serviceName: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
    },
  ]);

  console.log("service state =>", services);

  const [totalPrice, setTotalPrice] = useState(0);

  // Current date for the quotation
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  // Handle changes in a service item (quantity, unit price, etc.)
  const handleServiceChange = (
    index: number,
    field: keyof InitialServiceState,
    value: string
  ) => {
    const newServices = [...services];
    newServices[index][field] = value;

    if (field === "quantity" || field === "unitPrice") {
      // Calculate total price for the service
      const quantity = parseFloat(newServices[index].quantity) || 0;
      const unitPrice = parseFloat(newServices[index].unitPrice) || 0;
      newServices[index].totalPrice = (quantity * unitPrice).toFixed(2);
    }

    setServices(newServices);
    updateTotalPrice(newServices);
  };

  // Add a new service item
  const addService = () => {
    setServices([
      ...services,
      {
        serviceName: "",
        quantity: "",
        unitPrice: "",
        totalPrice: "",
      },
    ]);
    updateTotalPrice([...services]);
  };

  // Remove a service item
  const removeService = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  // Update the total price based on all service items
  const updateTotalPrice = (serviceList: InitialServiceState[]) => {
    const total = serviceList.reduce((acc, service) => {
      const serviceTotal = parseFloat(service.totalPrice) || 0;
      return acc + serviceTotal;
    }, 0);
    setTotalPrice(total);
  };

  // Handle form submission (currently empty)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM },
  });

  // JSX structure for the component
  return (
    <div className="bg-background">
      <form onSubmit={handleSubmit} className="space-y-4">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            onRemove={() => removeService(index)}
            onChange={(field: any, value: any) =>
              handleServiceChange(index, field, value)
            }
          />
        ))}
        <div className="max-w-md mx-auto">
          <Button type="button" onClick={addService} className="w-full">
            Add New Service
          </Button>
        </div>
      </form>

      <div className="hidden">
        <div ref={targetRef}>
          <Image src="/home.jpg" alt="logo" width={70} height={70} />
          <div className="space-y-1 mt-2">
            <h1 className="text-3xl uppercase font-bold">
              Home <span className="text-primary">Fix</span>
            </h1>
            <p className="text-base font-medium">
              Home Repair Solution for a Better Living
            </p>
            <p>Client:</p>
            <p>TEL:</p>
            <p>Date: {formattedDate}</p>
          </div>
          <Table className="mt-8 border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-black font-bold">
                  NO
                </TableHead>
                <TableHead className="text-black font-bold">
                  Description of work
                </TableHead>
                <TableHead className="text-right text-black font-bold">
                  QTY
                </TableHead>
                <TableHead className="text-right text-black font-bold">
                  Unit Price
                </TableHead>
                <TableHead className="text-right text-black font-bold">
                  Total Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            {services && (
              <TableBody>
                {services.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{service.serviceName}</TableCell>
                    <TableCell className="text-right">
                      {service.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {service.unitPrice ? (
                        <>RM {parseFloat(service.unitPrice).toFixed(2)}</>
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {service.totalPrice ? <>RM {service.totalPrice}</> : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>

          <div className="flex justify-end">
            <p className="font-bold">Total: RM {totalPrice.toFixed(2)}</p>
          </div>
          {/* Note section */}
          <div id="note" className="fixed left-0 right-0 bottom-6">
            {/* <p>
                  Note: The above price quoted based on the job to be carried
                  out during normal working hours (9 am-5 pm) not included
                  public holiday dates - Any workers health test fees exclude
                  quotation - Any additional parts found faulty/ works related
                  need to be replaced during repair/replacement/shutdown
                  services job
                </p> */}
            <div className="flex justify-between items-center gap-10 mt-10">
              <h1 className="text-lg border-t">Home Fix Authority</h1>
              <h1 className="text-lg border-t">Customer (Owner)</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto mt-4">
        {services.length > 1 ? (
          <Button
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={toPDF}
          >
            Download PDF
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default GenQuotation;
