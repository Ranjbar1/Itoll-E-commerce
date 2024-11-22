import { Suspense } from "react";
import ProductList from "./_components/ProductList";
import SearchBox from "./_components/SearchBox";
import Spinner from "./_components/Spinner";

export default function Home({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="bg-background text-foreground max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Discover amazing products at great prices
          </p>
          <SearchBox />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<Spinner />} key={searchParams?.search}>
          <ProductList filter={searchParams?.search} />
        </Suspense>
      </main>
    </div>
  );
}
