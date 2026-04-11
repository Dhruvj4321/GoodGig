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
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
        
          <motion.h1
            variants={item}
            className="font-montserrat text-5xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Strategic Partners
            </span>
            <br />
            in your Impact Journey.
          </motion.h1>

      
          <motion.p
            variants={item}
            className="font-montserrat font-medium tracking-widest mt-6 text-lg text-muted-foreground"
          >
            Goodgig Consultancy delivers tailored services in policy research, impact assessment, and advisory.
          </motion.p>
        </div>

        <div className="text-muted-foreground space-y-4">
          <motion.p variants={item} className="font-montserrat tracking-widest font-light">
            We work with nonprofits, governments, CSR foundations and social enterprises.
          </motion.p>
          <motion.p variants={item} className="font-montserrat font-light tracking-widest">
            We believe everyday actions can create transformation.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}