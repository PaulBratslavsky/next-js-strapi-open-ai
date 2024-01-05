"use server";
import { deleteDescription } from "@/services/delete-description";
import { revalidatePath } from "next/cache";

export async function deleteDescriptionAction(id: string) {
  const data = await deleteDescription(id);
  revalidatePath("/");
  return { data, message: "generateDescriptionAction" };
}
