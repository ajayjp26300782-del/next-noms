// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
      <div className="text-6xl">🍳</div>
      <h1 className="text-2xl font-bold">Recipe or Page Not Found</h1>
      <p className="text-neutral-400">
        We couldn't find what you were looking for. Let's get you back to the
        kitchen.
      </p>
      <div>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
