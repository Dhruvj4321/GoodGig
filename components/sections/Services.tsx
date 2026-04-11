"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Programme Design and Impact Strategy",
    desc: "Strategic planning, Theory of Change, advocacy pathways, community engagement, and media influence mapping.",
  },
  {
    title: "Research and Analysis",
    desc: "Policy landscape mapping, designing research tools, field data capture, and data analysis.",
  },
  {
    title: "Impact Measurement and Evaluation",
    desc: "Baseline & endline studies, outcome evaluation, and CSR reporting.",
  },
  {
    title: "Proposal / Pitch Deck Development",
    desc: "Grant proposal writing, strategic pitch decks, and advocacy factsheets.",
  },
  {
    title: "Thematic Assessments and Audits",
    desc: "Sector-specific assessments: Child Rights, Gender Equity, Urban Poverty, and Nutrition.",
  },
  {
    title: "Training and Content Development",
    desc: "Capacity building kits, instruction modules, impact case studies, and data storytelling.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <h2 className="text-4xl font-montserrat font-bold text-gray-900 text-center mb-16">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-2xl 
              bg-white 
              border border-gray-200 
              shadow-sm 
              hover:shadow-md 
              hover:-translate-y-1
              hover:border-indigo-300
              transition-all duration-300 cursor-pointer"
          >
          
            <div className="w-10 h-1 mb-4 bg-indigo-500 group-hover:w-14 transition-all duration-300" />

            {/* Title */}
            <h3 className="font-montserrat font-semibold text-gray-900 text-lg mb-2">
              {service.title}
            </h3>

           
            <p className="text-gray-600 text-sm font-montserrat font-regular leading-relaxed">
              {service.desc}
            </p>

           
          </motion.div>
        ))}
      </div>
    </section>
  );
}