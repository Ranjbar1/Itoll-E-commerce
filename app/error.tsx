"use client";
import Link from "next/link";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500">
          Something Went Wrong!
        </h1>
        <p className="mt-4 text-xl text-gray-700">{error.message}</p>
        <p className="mt-2 text-gray-500">Please try again later.</p>
        <div className="space-x-4">
          <Link
            href="/"
            replace
            className="mt-6 inline-block bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600"
          >
            Go Back Home
          </Link>
          <button
            onClick={reset}
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
