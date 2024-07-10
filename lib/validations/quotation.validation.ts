import * as z from "zod";

export const quotationValidationSchema = z.object({
  name: z.string(),
  quantity: z.string(),
  unitPrice: z.string(),
});
