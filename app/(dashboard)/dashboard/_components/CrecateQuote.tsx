import GenQuotation from "@/components/shared/GenQuotation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CrecateQuote = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Quotation</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create a new quotaions!</DialogTitle>
          <DialogDescription>
            Please fill out the form to create a quotations.
          </DialogDescription>
          <GenQuotation />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CrecateQuote;
