"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white">
      
   

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.h1
            variants={item}
            className="font-montserrat text-5xl md:text-7xl font-extrabold leading-tight text-gray-900"
          >
            <span className=" text-brand">
              Strategic Partners
            </span>
            <br />
            in your Impact Journey.
          </motion.h1>

          <motion.p
            variants={item}
            className="font-montserrat font-medium tracking-widest mt-6 text-lg text-black"
          >
            Goodgig Consultancy delivers tailored services in policy research, impact assessment, and advisory.
          </motion.p>
        </div>

        <div className="text-black space-y-4">
          <motion.p
            variants={item}
            className="font-montserrat tracking-widest font-medium"
          >
            We work with nonprofits, governments, CSR foundations and social enterprises.
          </motion.p>
          <motion.p
            variants={item}
            className="font-montserrat font-medium tracking-widest"
          >
            We believe everyday actions can create transformation.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}