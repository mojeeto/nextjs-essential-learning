import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Some went wronge!");
  return db.prepare("SELECT * FROM meals").all(); // return all rows
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
