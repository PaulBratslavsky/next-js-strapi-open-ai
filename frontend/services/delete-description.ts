export async function deleteDescription(id: string) {
  const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + "/api/videos/" + id , {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
