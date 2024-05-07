import Link from "next/link";

export default function MealsPage() {
  return (
    <main className="text-white">
      <h2>This is meals page.</h2>
      <ul>
        <li className="underline hover:text-blue-500 pl-5">
          <Link href="/meals/share">Share Meals</Link>
        </li>
      </ul>
    </main>
  );
}
