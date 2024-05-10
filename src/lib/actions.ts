"use server";

export async function shareMeal(formData: FormData) {
  const meal = {
    creator: formData.get("name"),
    title: formData.get("title"),
    summery: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email"),
  };

  console.log(meal);
}
