import z from "zod";

export const schema = z.object({
  name: z.string().min(2).max(100),
  price: z.number().min(1),
});
