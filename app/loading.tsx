import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <Spinner />
        <p className="mt-4 text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
