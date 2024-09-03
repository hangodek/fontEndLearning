/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myBrown: "#854836",
        myReddish: "#712d49",
      },
      fontFamily: {
        myFont: ['"Nerko One"', "cursive"],
      },
    },
  },
  plugins: [],
};
