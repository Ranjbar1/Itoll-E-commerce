import { getAllProducts } from "../_libs/api-products";
import ProductCard from "./ProductCard";

export default async function ProductList({ filter }: { filter?: string }) {
  const products = await getAllProducts();
  const filteredProducts = filter
    ? products.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <ProductCard
            key={`${item.id}-${item.title}`}
            id={item.id}
            image={item.category.image}
            name={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
