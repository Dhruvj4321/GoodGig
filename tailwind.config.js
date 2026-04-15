/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // required for Next.js app router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",     // (safe to include)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],        
        roboto: ['var(--font-roboto)'],
        montserrat: ['var(--font-montserrat)'],
        geist: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        brand: {
          DEFAULT: "#0978c8",
          white: "#ffffff",
          black: "#000000",

          700: "#2f7fb8",
          600: "#428fc2",
          500: "#5a9ac9",
          400: "#6ea7d0",

          300: "#88afc9",
          200: "#9bbbd0",
          100: "#a9c6d9",
          50: "#b8d2e2",
        },
      },
    },
  },
  plugins: [],
};