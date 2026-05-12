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

  // ✅ SAFE IMAGE HANDLING (fixes intermittent issue)
  const imageUrl =
    typeof project?.image_url === "string" && project.image_url.trim().length > 0
      ? getImageUrl(project.image_url)
      : null;

  const background = renderText(project.background);
  const outcomes = renderText(project.outcomes);

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* <Link
          href={`/services/${project.service}`}
          className="inline-flex items-center gap-2 text-black hover:text-brand mb-8 transition-colors text-sm font-montserrat font-regular"
        >
          ← Back to {project.service?.replace(/-/g, " ")}
        </Link> */}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* ✅ IMAGE BLOCK */}
          {imageUrl ? (
          <div className="relative w-full aspect-[16/10]">
              <Image
                src={imageUrl}
                alt={project.title ?? "Project"}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
                unoptimized={false}
              />
            </div>
          ) : (
            <div className="h-[400px] w-full bg-slate-100 flex items-center justify-center text-slate-400">
              No image
            </div>
          )}

          <div className="p-10">
            <h1 className="text-xl text-brand  font-montserrat font-semibold mb-2 whitespace-pre-line">
              {project.title}
            </h1>

            <p className="text-[#0978c8] font-montserrat font-medium mb-2">
              {project.organization}
            </p>

            {project.themes && (
              <p className="text-sm font-montserrat font-medium text-slate-700 mb-8">
                {project.themes}
              </p>
            )}

            <div className="space-y-8">

              {background && (
                <div>
                  <h2 className="text-xl font-montserrat font-medium text-black mb-3">
                    Background
                  </h2>
                  <p className="text-black font-montserrat font-medium leading-8 whitespace-pre-line text-sm">
                    {background}
                  </p>
                </div>
              )}

              {outcomes && (
                <div>
                  <h2 className="text-xl font-montserrat font-semibold  text-slate-900 mb-3">
                    Outcomes
                  </h2>
                  <p className="text-black font-montserrat font-medium text-sm leading-8 whitespace-pre-line">
                    {outcomes}
                  </p>
                </div>
              )}

              {project.report_url && (
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={project.report_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-1 border-brand text-brand px-6 py-3 rounded-xl hover:bg-brand hover:text-white transition font-montserrat font-medium text-sm"
                  >
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