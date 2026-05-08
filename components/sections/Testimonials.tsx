"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "A big thank you to Team Goodgig, especially Anuja and Chandrika, for an exceptional evaluation report. The sharp insights and engaging presentation truly reflect the impressive and honest work behind it",
    author: "Mr. Amit Narkar",
    role: "CEO, AROEHAN",
    image: "/Amit Narkar.png",
  },
  {
    quote:
      "It is a pleasure working with Goodgig Consultancy. I’ve known Anuja and Sangeeta’s work since long time. Collaborating with them has helped making some strategic programatic choices and rolling out advocacy initiatives at Apnalaya",
    author: "Mr. Praveen Singh",
    role: "CEO, Apnalaya",
    image: "/praveen singh.jpeg",
  },
  {
    quote:
      "Our collaboration with Anuja and her team on a baseline assessment was effective and insightful. The quality of analysis, use of tools, attention to detail, and clarity in presenting the information were all commendable. The level of transparency and responsiveness fostered a productive working relationship and allowed us to make informed decisions at every stage of the assessment.",
    author: "Mr. Divyanand Raj & Ms. Divya Banerjee",
    role: "Impact and Measurement, Nasscom Foundation",
    image: "/divyanand raj.jpeg",
  },
  {
    quote:
      "Thank you Goodgig Consultancy for doing a detailed study that included all necessary aspects for an evaluation of Girls Sponsorship Programme. Your effort to go beyond the direct scope of the project is well appreciated.",
    author: "Mr. Aditya Vyas",
    role: "Kashkari Panchayat, Pune",
    image: "/Aditya-Vyas-KP-Kashtakari-Panchayat-1-295x300.jpeg",
  },
  {
    quote:
      "Goodgig Consultancy is a highly professional research agency. The team has all the necessary expertise to deliver quality services. I would surely recommend them for their diligence, intelligence and critical thinking in creating a product.",
    author: "Mr. Mrinmoy Sarkar",
    role: "British Asian Trust",
    image: "/mirnmoy sarkar.jpeg",
  },
  {
    quote:
      "In our work together, Anuja was a tremendous partner. Her qualitative data collection skills - from instrument design to interviewing - are excellent and she helped our team to successfully navigate challenging circumstances. I look forward to our next opportunity to collaborate.",
    author: "Mr. Michael Moses",
    role: "EnCompass LLC",
    image: "/Michael.jpeg",
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-brand text-center mb-10 sm:mb-14 lg:mb-16">
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
  whileHover={{ y: -8, scale: 1.01 }}
  className="relative p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-md  hover:border-indigo-300 transition-all duration-300 flex flex-col h-full overflow-hidden"
>
  {/* subtle gradient glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60 pointer-events-none" />

  {/* Content wrapper */}
  <div className="relative z-10">
    
    {/* Top: Image + Author */}
    <div className="flex items-center gap-4 mb-5">
      <div className="relative">
        <img
          src={t.image}
          alt={t.author}
          className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-lg"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200" />
      </div>

      <div>
        <p className="font-montserrat font-semibold text-lg text-black leading-snug">
          {t.author}
        </p>
        <p className="text-sm font-montserrat font-medium text-[#2f7fb8]">
          {t.role}
        </p>
      </div>
    </div>

    {/* Quote */}
    <p className="text-black text-sm sm:text-[15px] leading-relaxed font-montserrat font-medium">
      “{t.quote}”
    </p>
  </div>
</motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}