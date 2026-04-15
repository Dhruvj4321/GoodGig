import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Reach from "@/components/sections/Reach";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import TeamSection from "@/components/sections/TeamandCollaborators";


export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Reach />
      <Clients />
      <TeamSection/>
      <Testimonials/>
     
      <Contact/>
    </main>
  );
}