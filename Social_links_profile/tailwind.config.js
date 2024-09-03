/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#1f1f1f",
        moreBlack: "#333333",
        myGreen: "#d2ec8b",
      },
    },
  },
  plugins: [],
};
