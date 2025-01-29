import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between">
        <Link href="/" className="font-bold">Portfolio</Link>
        <div className="space-x-4">
          <Link href="/projets">Projets</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
