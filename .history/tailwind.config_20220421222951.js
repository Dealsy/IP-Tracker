module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark-Gray": "#2b2b2b",
        Gray: "#969696",
        hoverGray: "#3f3f3f",
      },
      backgroundImage: {
        Backdrop: "url('../images/pattern-bg.png')",
      },
      width: {
        100: "28rem",
        105: "29rem",
        110: "30rem",
        115: "31rem",
        120: "32rem",
        125: "33rem",
        130: "34rem",
      },
    },
  },
  plugins: [],
};
