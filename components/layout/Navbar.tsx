"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 rounded-2xl px-6 py-3 shadow-lg">
        
        <h1 className="font-montserrat font-bold  text-xl">GOODGIG</h1>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

      </div>
    </div>
  );
}