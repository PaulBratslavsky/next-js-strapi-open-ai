"use server";
import { flattenAttributes } from "@/lib/utils";
import { saveDescription } from "@/services/save-description";
import { revalidatePath } from "next/cache";

export async function saveDescriptionAction(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  const dataToSave = {
    data: {
      videoId: rawFormData.videoId,
      description: rawFormData.description,
    }
  };
  const data = await saveDescription(dataToSave);
  const flattenedData = flattenAttributes(data);
  revalidatePath("/");
  return { ...prevState, data: flattenedData, message: "saved", videoId: rawFormData.videoId, };
}
