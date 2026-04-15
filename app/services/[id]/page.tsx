import { services } from "@/data/services";

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500 text-lg">Service not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
          {service.title}
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />

        {/* Description */}
        <p className="text-gray-600 font-montserrat font-semibold text-lg leading-relaxed">
          {service.desc}
        </p>

      </div>
    </section>
  );
}