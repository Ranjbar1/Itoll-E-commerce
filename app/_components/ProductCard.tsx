import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string | number;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
}: ProductCardProps) {
  return (
    <Link href={`/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 relative">
        <div className="relative h-72 w-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-nowrap truncate text-ellipsis max-w-[25ch] font-semibold text-gray-800 mb-2">
            {name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">
              ${price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
