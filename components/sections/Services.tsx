"use client";

import { motion } from "framer-motion";

const services = [
  "Impact Assessment: Research and Evaluation",
  "Policy Research",
  "Programme Strategy and Documentation",
  "Training and Instruction Manuals",
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Services</h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/10 shadow-xl"
          >
            <p className="font-semibold">{service}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}