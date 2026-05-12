import { getProjectsByService, getImageUrl } from "@/lib/strapi";
import Link from "next/link";
import Image from "next/image";

export default async function ServicePage({ params }: any) {
  const resolvedParams = await params;
  const service = resolvedParams.service;

  console.log("SERVICE PARAM:", service); // confirm this prints correctly now

  const projects = await getProjectsByService(service);

  return (
    <section className="min-h-screen bg-slate-50 px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-14 text-slate-900">Our Work</h1>

        {projects.length === 0 && (
          <p className="text-slate-400 text-lg">
            No projects found for: <code>{service}</code>
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project: any) => {
            const imageUrl = getImageUrl(project.image);

            return (
              <Link
                key={project.id}
                href={`/projects/${project.documentId}`}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border hover:shadow-xl transition"
              >
                {imageUrl ? (
                  <div className="relative h-60 w-full">
                    <Image
                      src={imageUrl}
                      alt={project.title ?? "Project"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-60 w-full bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                    No image
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm">{project.organization}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}