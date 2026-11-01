import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-neutral-900 border-b border-neutral-700 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Next<span className="text-amber-400">Bites</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a href="#recipes" className="hover:text-white transition-colors">
            Recipes
          </a>
        </div>
      </div>
    </nav>
  );
}
