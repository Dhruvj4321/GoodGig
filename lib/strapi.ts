export const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";
const TOKEN = process.env.STRAPI_API_TOKEN ?? "";
const headers = { Authorization: `Bearer ${TOKEN}` };

export async function getProjectsByService(service: string) {
  const url = `${API_URL}/api/projects?filters[service][$eq]=${service}&populate=*`;
  const res = await fetch(url, { headers, cache: "no-store" });
  const json = await res.json();

  // Log the shape of the first item so we can see exactly what's coming back
  // console.log("FIRST ITEM KEYS:", Object.keys(json.data?.[0] ?? {}));
  // console.log("FIRST ITEM:", JSON.stringify(json.data?.[0], null, 2));

  return (json.data ?? []).filter(Boolean); // filter out any undefined/null entries
}

export async function getProjectById(documentId: string) {
  const url = `${API_URL}/api/projects/${documentId}?populate=*`;
  const res = await fetch(url, { headers, cache: "no-store" });
  const json = await res.json();

  // console.log("PROJECT ITEM:", JSON.stringify(json.data, null, 2));

  return json.data || null;
}

export function getImageUrl(raw: any): string | null {
  if (!raw) return null;

  if (typeof raw !== "string") return null;

  const url = raw.trim();
  if (!url) return null;

  if (url.startsWith("http")) return url;

  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}

export function renderText(field: any): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  if (Array.isArray(field)) {
    return field.map((block: any) => {
      if (block.type === "paragraph" || block.type === "heading") {
        return block.children?.map((c: any) => c.text).join("") ?? "";
      }
      if (block.type === "list") {
        return block.children
          ?.map((item: any) => item.children?.map((c: any) => c.text).join(""))
          .join("\n") ?? "";
      }
      return "";
    }).join("\n\n");
  }
  return String(field);
}