const API_LINK = "https://mhw-db.com";
export async function getData(endPoint: string) {
  const res = await fetch(`${API_LINK}${endPoint}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
