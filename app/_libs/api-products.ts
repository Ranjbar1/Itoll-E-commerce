import { notFound } from "next/navigation";
import { ProductSchema, ProductsListSchema } from "../_types/ProductSchema";

export async function getAllProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 3600 },
    cache: "force-cache",
  });

  const data = await response.json();
  const result = ProductsListSchema.safeParse(data);

  if (!result.success) {
    console.error("Validation failed:", result.error);
    throw new Error("Failed to fetch or validate products.");
  }

  return result.data;
}

export async function getProductById(id: number | string) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    {
      next: { revalidate: 3600 },
      cache: "force-cache",
    }
  );

  const data = await response.json();
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    notFound();
  }

  return result.data;
}
