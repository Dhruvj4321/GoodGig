"use client";

import { motion } from "framer-motion";
import { Mail, Building2, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
      
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900"
        >
          Contact Us
        </motion.h2>

        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-gray-500 font-montserrat font-medium text-sm sm:text-base max-w-2xl mx-auto"
        >
          Have questions or want to collaborate? Reach out to us and we’ll get back to you shortly.
        </motion.p>

       
        <div className="mt-10 md:mt-12" />

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14"
        >
          
        
          <div className="flex items-center gap-2 sm:gap-3">
            <Mail className="text-blue-600 w-5 h-5 shrink-0" />
            <a
              href="mailto:info@goodgig.in"
              className="text-gray-900 text-sm sm:text-base font-montserrat font-medium  hover:text-blue-600 transition break-all"
            >
              info@goodgig.in
            </a>
          </div>

        
          <div className="hidden sm:block h-5 w-px bg-gray-300" />

         
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <Building2 className="text-purple-600 w-5 h-5 shrink-0" />
            <span className="text-gray-900 text-sm sm:text-base font-montserrat font-medium ">
              Goodgig Consultancy Private Limited
            </span>
          </div>

         
          <div className="hidden sm:block h-5 w-px bg-gray-300" />

         
          <div className="flex items-center gap-2 sm:gap-3">
            <FileText className="text-green-600 w-5 h-5 shrink-0" />
            <span className="text-gray-900 text-sm sm:text-base font-montserrat font-medium ">
              U80902MH2021OPC360468
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}