"use client";

interface LogoRowProps {
  items: string[];
}

function LogoRow({ items }: LogoRowProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max items-center gap-10 md:gap-14 lg:gap-16 animate-scroll">
        {[...items, ...items].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-10 md:h-14 lg:h-16 xl:h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const logos = [
    "/Apnalaya.jpg",
    "/aroehan.jpeg",
    "/CRY.png",
    "/British Asian Trust.png",
    "/dure technologies.png",
    "/eqfi.jpeg",
    "/GAIN.png",
    "/jagran pehel.jpeg",
    "/KKKPK.jpeg",
    "/market xcel.jpeg",
    "/nacglogo.png",
    "/nasscom foundation.png",
    "/oxfam.png",
    "/partnersinchange.jpeg",
    "/tdh.jpeg",
    "/TRIOs.jpeg",
    "/unicef.jpeg",
    "/workforce nutrition alliance.png",
  ];

  return (
    <section id="clients" className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-brand text-center mb-10 md:mb-12">
        Clients
      </h2>

      <LogoRow items={logos} />
    </section>
  );
}