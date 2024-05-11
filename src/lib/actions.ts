"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function IsInputTextValid(text: string) {
  return !text || text.length !== 0;
}

export async function shareMeal(formData: FormData) {
  const meal = {
    creator: formData.get("name") as string,
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator_email: formData.get("email") as string,
    slug: "",
  };

  if (
    IsInputTextValid(meal.title) ||
    IsInputTextValid(meal.creator) ||
    IsInputTextValid(meal.summary) ||
    IsInputTextValid(meal.instructions) ||
    IsInputTextValid(meal.creator_email) ||
    meal.creator_email.includes("@") ||
    !image ||
    image.size !== 0
  ) {
    throw new Error("Input is invalid!");
  }

  await saveMeal(meal);

  return redirect("/meals");
}
