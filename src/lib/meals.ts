import fs from "fs";
import slugify from "slugify";
import xss from "xss";
import sql from "better-sqlite3";
import { MealItemType } from "@/components/meals/meals-grid";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Some went wronge!");
  return db.prepare("SELECT * FROM meals").all(); // return all rows
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(
  meal: Omit<MealItemType, "id" | "image"> & { image: File | string },
) {
  meal.slug = slugify(meal.title!, { lower: true });
  meal.instructions = xss(meal.instructions!);

  if (meal.image instanceof File) {
    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Saving image failed!");
      }

      meal.image = `/images/${fileName}`;

      db.prepare(
        `
        INSERT INTO meals (title, summary, instructions, creator, creator_email, slug, image) VALUES (@title, @summary, @instructions, @creator, @creator_email, @slug, @image)
`,
      ).run(meal);
    });
  }
}
