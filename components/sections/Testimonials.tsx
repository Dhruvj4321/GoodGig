"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "A big thank you to Team Goodgig, especially Anuja and Chandrika, for an exceptional evaluation report. The sharp insights and engaging presentation truly reflect the impressive and honest work behind it",
    author: "Mr. Amit Narkar",
    role: "CEO, AROEHAN",
  },
  {
    quote:
      "It is a pleasure working with Goodgig Consultancy. I’ve known Anuja and Sangeeta’s work since long time. Collaborating with them has helped making some strategic programatic choices and rolling out advocacy initiatives at Apnalaya",
    author: "Mr. Praveen Singh",
    role: "CEO, Apnalaya",
  },
  {
    quote:
      "Our collaboration with Anuja and her team on a baseline assessment was effective and insightful. The quality of analysis, use of tools, attention to detail, and clarity in presenting the information were all commendable.",
    author: "Mr. Divyanand Raj & Ms. Divya Banerjee",
    role: "Impact and Measurement, Nasscom Foundation",
  },
  {
    quote:
      "Thank you Goodgig Consultancy for doing a detailed study that included all necessary aspects for an evaluation of Girls Sponsorship Programme.",
    author: "Mr. Aditya Vyas",
    role: "Kashkari Panchayat, Pune",
  },
  {
    quote:
      "Goodgig Consultancy is a highly professional research agency. The team has all the necessary expertise to deliver quality services.",
    author: "Mr. Mrinmoy Sarkar",
    role: "British Asian Trust",
  },
  {
    quote:
      "In our work together, Anuja was a tremendous partner. Her qualitative data collection skills are excellent.",
    author: "Mr. Michael Moses",
    role: "EnCompass LLC",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 text-center mb-10 sm:mb-14 lg:mb-16">
          Client Testimonials
        </h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Quote */}
              <p className="text-gray-700 mb-4 text-sm sm:text-base font-montserrat font-medium leading-relaxed tracking-normal">
                “{t.quote}”
              </p>

              {/* Author */}
              <div className="mt-4">
                <p className="font-montserrat font-semibold text-base sm:text-lg text-gray-900">
                  {t.author}
                </p>
                <p className="text-xs sm:text-sm font-montserrat font-medium text-gray-500">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}