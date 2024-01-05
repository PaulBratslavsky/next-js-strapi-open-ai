"use server";
import { generateDescription } from "@/services/generate-description";

export async function generateDescriptionAction(
  prevState: any,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData);
  const videoId = rawFormData.videoId as string;
  const data = await generateDescription(videoId);
  return {
    ...prevState,
    videoId: rawFormData.videoId,
    data,
    message: "generateDescriptionAction",
  };
}
