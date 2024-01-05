"use server";
import { updateDescription } from "@/services/update-description";
import { revalidatePath } from "next/cache";

export async function updateDescriptionAction( formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  const id = rawFormData.id as string;
  const dataToUpdate = {
    data: {
      description: rawFormData.description,
    }
  };
  const data = await updateDescription(dataToUpdate, id);
  revalidatePath("/");
  return { data, message: "generateDescriptionAction" };
}
