/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cream: "#DDC6A8",
      burn: "#B6772E",
      coco: "#38250E",
      chief: "#4B584B",
      peach: "#",
    },

    fontFamily: {
      studio: ["Crimson Pro", "serif"],
    },

    extend: {},
  },
  plugins: [],
};
