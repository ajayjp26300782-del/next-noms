// app/error.tsx
"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
      <div className="text-6xl">⚠️</div>
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-neutral-400 text-sm">
        {error.message ||
          "An unexpected error occurred while loading this page."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
      >
        Try again
      </button>
    </main>
  );
}
