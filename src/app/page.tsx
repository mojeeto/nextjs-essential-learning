import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div className="text-white">
        <span>Available Routes:</span>
        <ul className="flex flex-col pl-5">
          <li className="underline hover:text-blue-500">
            <Link href="/meals">Meals Page</Link>
          </li>
          <li className="underline hover:text-blue-500">
            <Link href="/community">Community Page</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
