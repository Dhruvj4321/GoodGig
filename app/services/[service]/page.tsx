import { getProjectsByService, getImageUrl } from "@/lib/strapi";
import Link from "next/link";
import Image from "next/image";

export default async function ServicePage({ params }: any) {
  const resolvedParams = await params;
  const service = resolvedParams.service;

  // console.log("SERVICE PARAM:", service); // confirm this prints correctly now

  const projects = await getProjectsByService(service);

  return (
    <section className="min-h-screen bg-slate-50 px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-brand text-center mb-10 md:mb-12">Our Work</h1>

        {projects.length === 0 && (
          <p className="text-slate-400 text-lg">
            No projects found for: <code>{service}</code>
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project: any) => {
  const imageUrl = getImageUrl(project.image_url);

  return (
    <Link
      key={project.id}
      href={`/projects/${project.documentId}`}
      className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl transition"
    >
      {imageUrl ? (
       <div className="relative w-full h-[420px] bg-white border-b border-gray-200">
  <Image
    src={imageUrl}
    alt={project.title ?? "Project"}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-contain"
  />
</div>
      ) : (
        <div className="h-60 w-full bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
          No image
        </div>
      )}

      <div className="p-6">
     <h3 className="text-sm text-brand  font-montserrat font-semibold mb-2 whitespace-pre-line">
  {project.title || '-'}
</h3>

        <p className="text-black font-montserrat font-medium text-sm">
          {project.organization}
        </p>
      </div>
    </Link>
  );
})}
        </div>
      </div>
    </section>
  );
}