import { notFound } from "next/navigation";
import { z } from "zod";

// Define the schema for a single product
const ProductSchema = z.object({
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

// Define the schema for a list of products (for getAllProducts)
const ProductsListSchema = z.array(ProductSchema);

// Define the function to get all products
export async function getAllProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");

  // Parse and validate the response data
  const data = await response.json();
  const result = ProductsListSchema.safeParse(data);

  if (!result.success) {
    console.error("Validation failed:", result.error);
    throw new Error("Failed to fetch or validate products.");
  }

  return result.data; // Returns the validated data
}

// Define the function to get a product by ID
export async function getProductById(id: number | string) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  // Parse and validate the response data
  const data = await response.json();
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    notFound();
  }

  return result.data; // Returns the validated product data
}
