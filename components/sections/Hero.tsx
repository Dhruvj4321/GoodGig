"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Brand palette
const BRAND = {
  primary: "#0978c8",
  primaryDark: "#0760a0",
  primaryDeep: "#054878",
  primaryLight: "#52a0d8",
  primaryPale: "#cde4f4",
  primaryFaint: "#e6f1f9",
};

const WORDS_LINE1 = ["Strategic", "Partners"];
const WORDS_LINE2 = ["in your", "Impact", "Journey."];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{count}{suffix}</>;
}

// Softly drifting background orbs using brand blue
function AmbientOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520, height: 520,
          top: "-10%", left: "-8%",
          background: `radial-gradient(circle, rgba(9,120,200,0.07) 0%, transparent 70%)`,
          filter: "blur(2px)",
        }}
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          bottom: "5%", right: "5%",
          background: `radial-gradient(circle, rgba(9,120,200,0.05) 0%, transparent 70%)`,
          filter: "blur(2px)",
        }}
        animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300, height: 300,
          top: "45%", left: "48%",
          background: `radial-gradient(circle, rgba(9,120,200,0.04) 0%, transparent 70%)`,
          filter: "blur(2px)",
        }}
        animate={{ x: [0, 14, 0], y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

// Tiny floating dots in brand blue
function ParticleField() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.8,
    duration: Math.random() * 13 + 9,
    delay: Math.random() * 7,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: "rgba(9,120,200,0.22)",
          }}
          animate={{ opacity: [0, 0.5, 0], y: [0, -40, -80], scale: [1, 1.4, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase overflow-hidden font-montserrat"
    >
      {/* Default border */}
      <span
        className="absolute inset-0 rounded-full transition-all duration-300"
        style={{ border: `1px solid rgba(9,120,200,0.45)` }}
      />
      {/* Hover fill */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: `linear-gradient(135deg, rgba(9,120,200,0.08), rgba(9,120,200,0.04))` }}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
      />
      <span
        className="relative z-10 transition-colors duration-300"
        style={{ color: BRAND.primaryDark }}
      >
        {children}
      </span>
      <motion.svg
        className="relative z-10 w-3.5 h-3.5"
        style={{ color: BRAND.primary }}
        viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </motion.button>
  );
}

function RevealWord({ word, delay, accent }: { word: string; delay: number; accent?: boolean }) {
  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
      <motion.span
        className="inline-block"
        style={accent ? { color: BRAND.primary, fontStyle: "italic" } : {}}
        initial={{ y: "108%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function StatCard({ num, suffix, label, delay }: { num: number; suffix: string; label: string; delay: number }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-xl transition-all duration-500 group-hover:scale-[1.02]"
        style={{ border: `1px solid rgba(9,120,200,0.14)` }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, rgba(9,120,200,0.05), rgba(9,120,200,0.02))` }}
      />
      <div className="relative px-5 py-4 rounded-xl">
        <div
          className="font-cormorant text-3xl font-light leading-none mb-1"
          style={{ color: BRAND.primary }}
        >
          {started ? <AnimatedCounter value={num} suffix={suffix} /> : `0${suffix}`}
        </div>
        <div className="font-montserrat text-[9px] tracking-[0.25em] uppercase text-stone-400">{label}</div>
      </div>
    </motion.div>
  );
}

// Impactful data ticker strip
function ImpactTicker() {
  const items = [
    "Policy Research", "Impact Assessment", "CSR Strategy",
    "Social Enterprise", "Community Development", "Strategic Advising",
    "Nonprofit Support", "Government Partnerships", "Equity & Inclusion",
  ];
  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3" style={{ borderTop: `1px solid rgba(9,120,200,0.1)`, borderBottom: `1px solid rgba(9,120,200,0.1)` }}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-montserrat text-[10px] tracking-[0.28em] uppercase text-stone-400">
              {item}
            </span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: `rgba(9,120,200,0.35)`, display: "inline-block" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: yBg }}>
        {/* Very faint warm top wash */}
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 75% 50% at 50% 0%, rgba(9,120,200,0.04) 0%, transparent 60%)` }}
        />
        {/* Bottom right tint */}
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 45% 45% at 95% 85%, rgba(9,120,200,0.03) 0%, transparent 55%)` }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(9,120,200,0.09) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            opacity: 0.7,
          }}
        />
      </motion.div>

      <AmbientOrbs />
      <ParticleField />

      {/* Top brand-blue accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${BRAND.primaryLight} 20%, ${BRAND.primary} 50%, ${BRAND.primaryLight} 80%, transparent 100%)`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 w-full py-12 flex-1 flex flex-col justify-center"
        style={{ opacity: contentOpacity }}
      >

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-7"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="h-px"
            style={{ background: BRAND.primary, opacity: 0.6 }}
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />
          <span
            className="font-montserrat text-[9px] tracking-[0.42em] uppercase"
            style={{ color: BRAND.primary, opacity: 0.75 }}
          >
            Social Impact Consulting
          </span>
        </motion.div>

        {/* Headline — much smaller */}
        <div className="mb-7">
          <h1
            className="font-cormorant font-light leading-[0.93] text-stone-900"
            style={{ fontSize: "clamp(2.4rem, 4.2vw, 4.8rem)" }}
          >
            <div className="flex gap-[0.2em] flex-wrap">
              {WORDS_LINE1.map((w, i) => (
                <RevealWord key={w} word={w} delay={0.28 + i * 0.12} />
              ))}
            </div>
            <div className="flex gap-[0.2em] flex-wrap mt-[0.04em]">
              {WORDS_LINE2.map((w, i) => (
                <RevealWord key={w} word={w} delay={0.52 + i * 0.12} accent={w === "Impact"} />
              ))}
            </div>
          </h1>
        </div>

        {/* Thin brand-blue divider */}
        <motion.div
          className="flex items-center gap-3 mb-9"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
        >
          <div
            className="h-px max-w-[200px] flex-1"
            style={{ background: `linear-gradient(to right, rgba(9,120,200,0.5), rgba(9,120,200,0.15), transparent)` }}
          />
          <motion.div
            className="flex-shrink-0"
            style={{ width: 5, height: 5, background: BRAND.primary, opacity: 0.6, transform: "rotate(45deg)" }}
            animate={{ rotate: [45, 225, 45] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <div
            className="h-px flex-1"
            style={{ background: `linear-gradient(to right, rgba(9,120,200,0.08), transparent)` }}
          />
        </motion.div>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 mb-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-montserrat text-[0.88rem] leading-[1.85] text-stone-600 tracking-wide mb-5">
              Goodgig Consultancy is a Social Impact Consulting firm delivering tailored, project-based
              services in{" "}
              <span className="font-semibold" style={{ color: BRAND.primaryDark }}>Policy Research</span>{" "}
              and{" "}
              <span className="font-semibold" style={{ color: BRAND.primaryDark }}>Impact Assessment</span>.
            </p>

            <p className="font-montserrat text-[0.8rem] leading-[1.95] text-stone-500 tracking-wide mb-8">
              We work alongside nonprofits, governments, CSR foundations and social enterprises to
              support their missions through policy research, impact evaluation and strategic advising.
            </p>

            <MagneticButton>Explore Our Work</MagneticButton>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-7"
          >
            <p
              className="font-montserrat text-[0.8rem] leading-[2] text-stone-500 tracking-wide pl-5 italic"
              style={{ borderLeft: `1.5px solid rgba(9,120,200,0.3)` }}
            >
              At Goodgig Consultancy, we believe the world is rich with inherent goodness, and everyday
              actions can be a powerful force for transformation. We work in close collaboration with
              organisations dedicated to improving the lives of others — empowering one another toward a
              just, equitable and inclusive society.
            </p>

            <div className="grid grid-cols-3 gap-2.5">
              <StatCard num={50} suffix="+" label="Projects" delay={1.55} />
              <StatCard num={12} suffix="+" label="Countries" delay={1.7} />
              <StatCard num={8} suffix="yrs" label="Experience" delay={1.85} />
            </div>
          </motion.div>
        </div>

        {/* Impact ticker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImpactTicker />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-stone-300">Scroll</span>
        <motion.div
          className="w-px h-7"
          style={{
            background: `linear-gradient(to bottom, rgba(9,120,200,0.4), transparent)`,
            originY: 0,
          }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(9,120,200,0.12), transparent)` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.8 }}
      />
    </section>
  );
}
