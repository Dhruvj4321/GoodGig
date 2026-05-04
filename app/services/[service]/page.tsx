import { getProjectsByService } from "@/lib/strapi";
import Link from "next/link";

export default async function ServicePage({ params }: any) {
  const resolvedParams = await params;
  const service = resolvedParams.service;

  const projects = await getProjectsByService(service);

  return (
    <section className="min-h-screen bg-slate-50 px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-14 text-slate-900">
          Our Work
        </h1>

        <div className="grid md:grid-cols-4 gap-8">
          {projects?.map((project: any) => (
            <Link
              href={`/projects/${project.documentId || project.id}`}
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition duration-300 p-5"
            >
              <h3 className="font-semibold text-lg text-slate-900 line-clamp-2 mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500">
                {project.organization}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}