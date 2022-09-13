/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "547px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1680px",
    },
    extend: {
      colors: {
        primary: "#ff4500",
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.18)",
        blue: "#24A0ED",
      },
    },
  },
  plugins: [],
};
