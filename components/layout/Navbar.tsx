"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Team", id: "team" },
  { label: "FAQ", route: "/faq" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
];

interface NavItem {
  label: string;
  id?: string;
  route?: string;
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (item: NavItem) => {
    setActiveItem(item.id || item.route || null);
    if (item.route) {
      router.push(item.route);
    } else if (item.id) {
      if (window.location.pathname !== "/") {
        router.push(`/#${item.id}`);
      } else {
        handleScroll(item.id);
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3.5">
      <motion.div
        className="max-w-6xl mx-auto flex justify-between items-center rounded-2xl px-4 md:px-6 py-2.5"
        animate={{
          background: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.65)",
          borderColor: scrolled ? "rgba(214,211,206,0.7)" : "rgba(214,211,206,0.45)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.06), 0 1px 0 rgba(180,140,60,0.08) inset"
            : "0 2px 16px rgba(0,0,0,0.04)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(214,211,206,0.5)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/Goodgig+Consultancy+logo-preview.png"
              alt="GoodGig Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-montserrat tracking-[0.22em] font-bold text-[13px] md:text-[14px] text-stone-900 group-hover:text-stone-700 transition-colors duration-200">
              GOODGIG
            </span>
            <span className="font-montserrat text-[8px] md:text-[9px] font-semibold text-stone-400 tracking-[0.3em]">
              CONSULTANCY
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item)}
              className="relative group px-3.5 py-2 text-[11px] font-montserrat font-semibold tracking-[0.15em] uppercase text-black hover:text-brand transition-colors duration-200 cursor-pointer"
            >
              {item.label}
              {/* Underline reveal on hover */}
              <motion.span
                className="absolute bottom-1 left-3.5 right-3.5 h-px bg-amber-500/60"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </button>
          ))}

          {/* CTA pill */}
          <motion.button
            onClick={() => handleNavigation({ label: "Contact", id: "contact" })}
            className="ml-3 relative inline-flex items-center gap-2 px-5 py-2 text-[11px] font-montserrat font-semibold tracking-[0.15em] uppercase overflow-hidden rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              border: "1px solid rgba(180,140,60,0.45)",
              color: "#92632a",
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(135deg, rgba(253,246,227,0.8), rgba(255,248,220,0.4))" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Get in Touch</span>
            <svg className="relative z-10 w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </nav>

        {/* Mobile menu toggle */}
        <motion.button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl"
          style={{ background: "rgba(245,242,236,0.8)", border: "1px solid rgba(214,211,206,0.6)" }}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X size={16} color="#57534e" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Menu size={16} color="#57534e" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(214,211,206,0.6)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            {/* Thin gold top accent */}
            <div className="w-8 h-px bg-amber-500/50 mb-5" />

            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => { handleNavigation(item); setOpen(false); }}
                  className="text-left px-3 py-2.5 text-[11px] font-montserrat font-semibold tracking-[0.18em] uppercase text-stone-500 hover:text-stone-800 hover:bg-stone-50/80 rounded-xl transition-all duration-150"
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(214,211,206,0.5)" }}>
                <button
                  onClick={() => { handleNavigation({ label: "Contact", id: "contact" }); setOpen(false); }}
                  className="w-full text-center px-5 py-2.5 text-[11px] font-montserrat font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-200"
                  style={{
                    border: "1px solid rgba(180,140,60,0.4)",
                    color: "#92632a",
                    background: "rgba(253,246,227,0.5)",
                  }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
