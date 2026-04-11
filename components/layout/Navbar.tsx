"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "SERVICES", id: "services" },
  { label: "FEATURED WORK", id: "featured-work" },
  { label: "TESTIMONIALS", id: "testimonials" },
  { label: "TEAM", id: "team" },
  { label: "FAQ", id: "faq" },
  { label: "CLIENTS", id: "clients" },
  { label: "CONTACT", id: "contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl px-4 md:px-6 py-3 shadow-md">
        
       
       <div
  onClick={() => handleScroll("hero")}
  className="flex items-center gap-3 cursor-pointer"
>
  <Image
    src="/Goodgig+Consultancy+logo-preview.png"
    alt="GoodGig Logo"
    width={40}
    height={40}
    className="object-contain"
  />

  <div className="flex flex-col leading-tight">
    <h1 className="font-montserrat tracking-widest font-bold text-lg md:text-xl text-gray-900">
      GOODGIG
    </h1>
    <span className="text-[10px]  md:text-[11px] font-montserrat font-semibold text-gray-600 tracking-wider">
      CONSULTANCY
    </span>
  </div>
</div>

       
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => handleScroll(item.id)}
    className="text-sm font-montserrat cursor-pointer font-semibold text-gray-700 hover:text-black transition"
  >
    {item.label}
  </button>
))}
        </div>

       
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} color="black"/>}
        </button>
      </div>

    
      {open && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto backdrop-blur-xl bg-white/90 border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col gap-4">
          {navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => {
      handleScroll(item.id);
      setOpen(false);
    }}
    className="text-sm font-montserrat font-semibold text-gray-700 hover:text-black transition text-left"
  >
    {item.label}
  </button>
))}
        </div>
      )}
    </div>
  );
}