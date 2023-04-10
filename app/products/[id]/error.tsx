"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center text-3xl h-64 flex items-center justify-center font-semibold min-h-[calc(100vh-9rem)] ">
      Sorry, There seems to be an error...
    </div>
  );
}
