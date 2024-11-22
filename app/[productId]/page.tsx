import Image from "next/image";
import { getProductById } from "../_libs/api-products";
type PageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | undefined };
};
export function generateMetadata({ params }: PageProps) {
  return {
    title: `Product No: ${params.productId}`,
  };
}
export default async function ProductDetail({ params }: PageProps) {
  const { productId: id } = params;

  const product = await getProductById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
