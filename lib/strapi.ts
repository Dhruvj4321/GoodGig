const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is missing");
}

const headers = {
  Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
};

export async function getProjectsByService(service: string) {
  const res = await fetch(
    `${API_URL}/api/projects?filters[service][$eq]=${service}&populate=*`,
    {
      headers,
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  return data.data;
}

export async function getProjectById(id: string) {
  const res = await fetch(`${API_URL}/api/projects/${id}?populate=*`, {
    headers,
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.data;
}