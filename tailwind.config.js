/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        primary: "#43766C",
        secondary: "#818690",
        dark: "#222831",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
};
