"use client";

export default function Clients() {
  const logos = [
    "/images/clients/pehel.png",
    "/images/clients/learninglinks.png",
    "/images/clients/gain.png",
    "/images/clients/nasscom.png",
    "/images/clients/kkpkp.png",
  ];

  return (
    <section id="clients" className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 text-center mb-10 md:mb-12">
        Clients
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8 md:gap-12 lg:gap-16 w-max items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="client logo"
              className="
                h-10 md:h-14 lg:h-16 xl:h-20
                object-contain
                grayscale opacity-70
                hover:grayscale-0 hover:opacity-100
                transition duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}