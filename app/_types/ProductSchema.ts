import { z } from "zod";

export const ProductSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
  }),
  images: z.array(z.string()),
});

export const ProductsListSchema = z.array(ProductSchema);
