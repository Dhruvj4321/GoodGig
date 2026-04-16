"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const founders = [
  {
    name: "Anuja Shah",
    role: "Founder and Director",
    image: "/Anuja-Shah.webp",
    linkedin: "https://www.linkedin.com/in/anuja-kastia-shah/",
  },
  {
    name: "Sangeeta M",
    role: "Lead Consultant - Knowledge",
    image: "/Sangeeta-M.webp",
    linkedin: "https://www.linkedin.com/in/sangeeta-m-0b2a72141/",
  },
];

const collaborators = [
  {
    name: "Raghunandan Hegde",
    role: "Advisor - Monitoring, Evaluation and Learning",
    image: "/Raghunandan-Hegde.webp",
    linkedin: "https://www.linkedin.com/in/raghunandanhegde/",
  },
  {
    name: "Steshia Monserrate",
    role: "Consultant - Marketing Communications",
    image: "/Steshia-Monserrate.webp",
    linkedin: "https://www.linkedin.com/in/steshiamonserrate/",
  },
  {
    name: "Mandheer Singh",
    role: "Consultant - Brand Communications",
    image: "/Mandeer-Singh.webp",
    linkedin: "https://www.linkedin.com/in/mandheer-singh/",
  },
  {
    name: "Dhwani Bafna",
    role: "Consultant - Education and Development",
    image: "/Dhwani-Bafna.webp",
    linkedin: "https://www.linkedin.com/in/dhwanibafna/",
  },
  {
    name: "Chandrika Singh",
    role: "Consultant - Gender and Development",
    image: "/Chandrika-Singh.webp",
    linkedin: "https://www.linkedin.com/in/chandrika-singh-077351247/",
  },
];

function PersonCard({
  name,
  role,
  image,
  linkedin,
  variant = "default",
}: {
  name: string;
  role: string;
  image: string;
    linkedin?: string;
  variant?: "default" | "small";
}) {
  const isSmall = variant === "small";

  return (
    <a
  href={linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>   <div
      className={`p-5 rounded-2xl shadow-md border bg-white hover:shadow-lg transition text-center w-full    hover:border-indigo-300 ${
        isSmall ? "min-w-[180px] p-3" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`mx-auto mb-4 relative overflow-hidden rounded-md ${
          isSmall ? "w-16 h-16" : "w-24 h-30"
        }`}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3
        className={`font-montserrat font-bold text-black ${
          isSmall ? "text-sm" : "text-base sm:text-lg"
        }`}
      >
        {name}
      </h3>

      <p
        className={`text-[#2f7fb8] mt-1 font-montserrat font-medium ${
          isSmall ? "text-xs" : "text-sm"
        }`}
      >
        {role}
      </p>
    </div></a>
 
  );
}

export default function TeamSection() {
  const collaboratorsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 200; // card + gap approximation

  const handleScroll = () => {
    if (!collaboratorsRef.current) return;

    const scrollLeft = collaboratorsRef.current.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!collaboratorsRef.current) return;

    collaboratorsRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section id="team" className="py-16 md:py-10 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-brand text-center mb-12 sm:mb-16">
          Meet Our Team
        </h2>

        {/* Leadership */}
        <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-[#5a9ac9] mb-4">
          Leadership
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {founders.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>

        {/* Collaborators */}
        <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-[#5a9ac9] mb-4">
          Collaborators
        </h3>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={collaboratorsRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {collaborators.map((person) => (
              <div key={person.name} className="min-w-[180px]">
                <PersonCard {...person} variant="small" />
              </div>
            ))}
          </div>

          {/* Dots */}
         {/* Dots (only mobile) */}
<div className="flex justify-center gap-2 mt-3 sm:hidden">
  {collaborators.map((_, index) => (
    <button
      key={index}
      onClick={() => scrollToIndex(index)}
      className={`w-2.5 h-2.5 rounded-full transition-all ${
        activeIndex === index ? "bg-black scale-110" : "bg-gray-300"
      }`}
    />
  ))}
</div>
        </div>
      </div>
    </section>
  );
}