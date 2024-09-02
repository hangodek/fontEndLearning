/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myYellow: "#F4D04E",
      },
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
