/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {

    extend: {

      colors: {
        "primary-color": "#22c55e",
        "primary-color-dark": "#16a34a"
      },

      fontFamily: {
        "caveat": ["Caveat", "cursive"],
        "lobster": ["Lobster", "sans-serif"],
        "pacifico": ["Pacifico", "cursive"],
        "dancing-script": ["Dancing Script", "cursive"]
      }

    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }

  },
  
  plugins: [],
}

