"use client";

import { useState } from "react";
import useDebounce from "../_libs/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce((query: string) => {
    console.log("Searching for:", query);
    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    router.replace(`${path}?${params.toString()}`);
  }, 600);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };
  return (
    <div className="max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-lg focus:outline-none"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}
