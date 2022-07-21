/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
