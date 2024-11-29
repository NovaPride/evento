"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="py-24 text-center">
      <H1>{"Ooopsies.. somethink went wronk >.<"}</H1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
        className="mt-8 rounded-xl bg-blue-500 px-10 py-4 text-xl font-medium text-white transition hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </main>
  );
}
