/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f0e8",
        ink: "#272522",
        ash: "#8d8a82",
        moss: "#6f7468",
        stone: "#d7d0c4",
        dusk: "#343632"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(39, 37, 34, 0.12)"
      }
    }
  },
  plugins: []
};
