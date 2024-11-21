import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">Oops! Page Not Found.</p>
        <p className="mt-2 text-gray-500">
          The Product you&apos;ve looking for doesn&apos;t exist anymore.
        </p>
        <Link
          href="/"
          replace
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
