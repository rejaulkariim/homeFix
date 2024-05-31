import { Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ServiceItem = ({ onRemove, onChange }: any) => {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto">
      <div
        onClick={onRemove}
        className="cursor-pointer bg-rose-800 h-10 w-10  flex justify-center items-center rounded-full"
      >
        <Trash2 className="h-4 w-4" />
      </div>
      <div className="">
        <Label htmlFor="name" className="text-right">
          Service Name
        </Label>
        <Input
          id="name"
          type="text"
          required
          placeholder="Service Name"
          onChange={(e) => onChange("serviceName", e.target.value)}
          className="mt-2"
        />
      </div>

      <div className="flex justify-between gap-4 items-center">
        <div className="w-full">
          <Label htmlFor="quantity" className="text-right">
            Quantity
          </Label>
          <Input
            id="quantity"
            type="number"
            required
            placeholder="Quantity"
            onChange={(e) => onChange("quantity", e.target.value)}
            className="mt-2"
          />
        </div>
        <div className="w-full">
          <Label htmlFor="unit" className="text-right">
            Unit Price
          </Label>
          <Input
            id="unit"
            type="number"
            required
            placeholder="Unit Price"
            onChange={(e) => onChange("unitPrice", e.target.value)}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
