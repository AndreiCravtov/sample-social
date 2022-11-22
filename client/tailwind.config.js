/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        /** Hide scrollbar */
        ".scrollbar-none": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            "display": "none" // Chrome, Safari and Opera
          }
        }
      }, ["responsive"])
    })
  ],
}
