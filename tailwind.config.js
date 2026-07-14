/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#60A5FA",
        background: "#0D1117",
        surface: "#161B22",
        border: "#30363D",
        text: "#F0F6FC",
        muted: "#8B949E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.25)",
      },
    },
  },
  plugins: [],
};