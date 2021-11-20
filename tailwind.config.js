const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#264653",
      secondary: "#2a9d8f",
      error: "#e76f51",
      lightYellow: "#e9c46a",
      lightOrange: "#f4a261",
      white: "white",
      black: "black",
    },
    screens: {
      xs: "325px",
      xl3: "2500px",
      ...defaultTheme.screens,
    },

    fontFamily: {
      gilroyBold: ["gilroy-bold"],
      gilroy: ["gilroy"],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
