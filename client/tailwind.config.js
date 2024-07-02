/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#ffffff",
      secondary: "#f7f7f9",
      tertiary: "#0e3531",
      quarternary: "#e67850",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-container": {
          padding: "1rem 2rem",
          margin: "0 1rem",
        },
      });
    },
  ],
};
