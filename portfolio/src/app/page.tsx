import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Bienvenue sur mon Portfolio</h1>
      <p className="text-lg">Découvrez mes projets et contactez-moi.</p>
      <Link href="/projets" className="bg-blue-600 text-white px-4 py-2 rounded">
        Voir mes projets
      </Link>
    </div>
  );
}
