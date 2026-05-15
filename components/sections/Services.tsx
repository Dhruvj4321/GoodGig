"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const router = useRouter();

  return (
    <section
      id="services"
      className="py-28 px-6 bg-slate-50 to-white"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-brand text-center mb-10 md:mb-12">
        Our Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            onClick={() => router.push(`/services/${service.id}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-7 cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Accent Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5a9ac9]/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Accent */}
            <div className="w-12 h-1 rounded-full bg-[#5a9ac9] mb-6 group-hover:w-20 transition-all duration-500" />

            {/* Title */}
            <h3 className="font-montserrat font-semibold text-lg text-black mb-3 group-hover:text-brand transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            {/* {service?.desc && (
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
            )} */}
 <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#5a9ac9]/8 to-indigo-400/8 opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {/* CTA */}
            <div className="flex items-center text-brand font-montserrat font-medium text-sm gap-2 opacity-70 group-hover:opacity-100 transition">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}