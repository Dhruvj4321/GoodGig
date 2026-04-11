"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  "SERVICES",
  "FEATURED WORK",
  "TESTIMONIALS",
  "TEAM",
  "CLIENTS",
  "CONTACT",
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl px-4 md:px-6 py-3 shadow-md">
        
       
        <div className="flex items-center gap-3">
          <Image
            src="/Goodgig+Consultancy+logo-preview.png"
            alt="GoodGig Logo"
            width={40}
            height={40}
            className="object-contain"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="font-montserrat font-bold text-lg md:text-xl text-gray-900">
              GOODGIG
            </h1>
            <span className="text-[10px] md:text-[11px] font-montserrat font-semibold text-gray-600 tracking-wide">
              CONSULTANCY
            </span>
          </div>
        </div>

       
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-sm font-montserrat font-semibold text-gray-700 hover:text-black transition"
            >
              {item}
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
              key={item}
              onClick={() => setOpen(false)}
              className="text-sm font-montserrat font-semibold text-gray-700 hover:text-black transition text-left"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}