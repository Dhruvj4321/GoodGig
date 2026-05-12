import { getProjectById, getImageUrl, renderText } from "@/lib/strapi";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({ params }: any) {
  const resolvedParams = await params;
  const project = await getProjectById(resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Project not found.</p>
      </div>
    );
  }

  const imageUrl = getImageUrl(project);
  const background = renderText(project.background);
  const outcomes = renderText(project.outcomes);

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <Link
          href={`/services/${project.service}`}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors text-sm"
        >
          ← Back to {project.service?.replace(/-/g, " ")}
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {imageUrl ? (
            <div className="relative h-[400px] w-full">
              <Image
                src={imageUrl}
                alt={project.title ?? "Project"}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="h-[400px] w-full bg-slate-100 flex items-center justify-center text-slate-400">
              No image
            </div>
          )}

          <div className="p-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 whitespace-pre-line">
              {project.title}
            </h1>

            <p className="text-indigo-600 font-medium mb-2">
              {project.organization}
            </p>

            {project.themes && (
              <p className="text-sm text-slate-400 mb-8">
                {project.themes}
              </p>
            )}

            <div className="space-y-8">
              {background && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Background
                  </h2>
                  <p className="text-slate-700 leading-8 whitespace-pre-line">
                    {background}
                  </p>
                </div>
              )}

              {outcomes && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Outcomes
                  </h2>
                  <p className="text-slate-700 leading-8 whitespace-pre-line">
                    {outcomes}
                  </p>
                </div>
              )}

              {project.report_url && (
                <div className="pt-4 border-t border-slate-100">
                  
                    href={project.report_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-medium text-sm"
                  <a>
                    View Full Report →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}