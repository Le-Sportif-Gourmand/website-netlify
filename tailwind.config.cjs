/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  // Safelist forcée pour utilitaires/variants utilisés dans les composants
  safelist: [
    // classes précises
    "translate-x-full",
    "translate-x-0",
    "pointer-events-none",
    "shadow-soft",
    "rounded-2xl",
    "bg-primary",
    "text-primary",
    "min-h-screen",
    // responsive variant explicit
    "lg:hidden",
    // patterns (ex : shadow-*, h-[64px], w-[320px], etc.)
    { pattern: /^shadow-/ },
    { pattern: /^h-\[/ },
    { pattern: /^w-\[/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0B4A6F" },
        gold:    { DEFAULT: "#C7A14A" },
        ink:     { DEFAULT: "#0E1116" },
        slateish:{ DEFAULT: "#334155" },
        offwhite:{ DEFAULT: "#F8F9FB" },
        tricolor:{
          blue:  "#0055A4",
          white: "#FFFFFF",
          red:   "#EF4135",
        },
        success:{ DEFAULT: "#2E7D32" },
        danger: { DEFAULT: "#B3261E" }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "16px",
      },
      fontFamily: {
        display: ["Montserrat","ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Helvetica Neue","Arial"],
        sans:    ["Inter","ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Helvetica Neue","Arial"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}
