/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'slide-bg': {
          '0%': {
            backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), #06201e), url("picture_1.jpg")'
          },
          '33%': {
            backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), #06201e), url("picture_2.jpg")'
          },
          '66%': {
            backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), #06201e), url("picture_3.jpg")'
          },
          '100%': {
            backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), #06201e), url("picture_4.jpg")'
          }
        },
        'slide-text': {
          'from': {
            marginTop: "200px"
          },
          'to': {
            marginTop: "0"
          }
        }
      },
      animation: {
        'slide-bg': 'slide-bg 15s linear infinite',
        'slide-text': 'slide-text 1s linear 1'
      },
    },
    colors: {
      primary: "#ffffff",
      secondary: "#f7f7f9",
      tertiary: "#0e3531",
      quarternary: "#e67850",
      gray: "#767676"
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      "dm-serif": ["Marcellus", "serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-container": {
          padding: "1rem 2rem",
          margin: "0 1rem",
        },
        ".card-hover:hover": {
          transform: "scale(1.05)",
          transition: "all 0.3s ease-in-out",
          background: "#e67850",
          color: "#fff ",
        }
      });
    },
  ],
};
