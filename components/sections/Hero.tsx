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
            className="font-montserrat text-2xl md:text-5xl font-extrabold leading-tight text-gray-900"
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
           Goodgig Consultancy is a Social Impact Consulting firm delivering tailored, project-based
services in Policy Research and Impact Assessment.


          </motion.p>
        </div>

        <div className="text-black space-y-4">
          <motion.p
            variants={item}
            className="font-montserrat tracking-widest font-medium"
          >
            We enjoy working alongside nonprofits, governments, CSR foundations and social enterprises to support their missions through policy research, impact evaluation and strategic advising. 


          </motion.p>
          <motion.p
            variants={item}
            className="font-montserrat font-medium tracking-widest"
          >
          At Goodgig Consultancy, we believe the world is rich with inherent goodness, and everyday actions can be a powerful force for transformation. We work in close collaboration with organisations and people dedicated to improving the lives of others, empowering one another to contribute towards a just, equitable and inclusive society.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}