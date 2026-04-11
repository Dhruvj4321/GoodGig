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
    <section className="py-24 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-montserrat font-bold text-gray-900 text-center mb-12">
        Clients
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-16 w-max items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-16 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              alt="client logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}