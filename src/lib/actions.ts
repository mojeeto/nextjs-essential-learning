"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInputInvalid(text: string) {
  return !text || text.length !== 0;
}

export async function shareMeal(
  prevState: { message: string },
  formData: FormData,
) {
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
    !isInputInvalid(meal.title) ||
    !isInputInvalid(meal.creator) ||
    !isInputInvalid(meal.summary) ||
    !isInputInvalid(meal.instructions) ||
    !isInputInvalid(meal.creator_email)
  ) {
    return {
      message: "Invliad input!",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  return redirect("/meals");
}
