export async function saveDescription(dataToSend: any) {
  const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + "/api/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...dataToSend }),
    });
    const data = await response.json();
    return { data, message: "saved" };
  } catch (error) {
    console.log("error", error);
  }
}
