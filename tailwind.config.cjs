/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#6B32E3",
      gray: {
        100: "#E4E5F2",
        200: "#CFD1E1",
        300: "#B3B4BE",
        400: "#858585",
        500: "#404040",
      },
    },
  },
  plugins: [],
};
