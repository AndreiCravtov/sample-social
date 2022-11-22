/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

/**
 * This expands to an object where each key in the keys has the same value
 * @param {*} keys the keys which should have the value
 * @param {*} value the value each key should be assigned to
 * @returns an object where each key in the keys has the same value
 */
function expand(keys, value) {
  obj = {};
  for (i=0; i<keys.length; i++)
    obj[keys[i]] = value;
  return obj;
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Extra spacing blocks
        "112": "448px",
        "128": "512px",
        "144": "576px",
        "160": "640px",
        "176": "704px",
        "192": "768px",
        "208": "832px",
        "216": "864px",
        "224": "896px"
      },
      ...expand(["minWidth", "minHeight", "maxWidth", "maxHeight"], {
        // Default spacing blocks
        "px": "1px",
        "0.5": "2px",
        "1": "4px",
        "1.5": "6px",
        "2": "8px",
        "2.5": "10px",
        "3": "12px",
        "3.5": "14px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "28": "112px",
        "32": "128px",
        "36": "144px",
        "40": "160px",
        "44": "176px",
        "48": "192px",
        "52": "208px",
        "56": "224px",
        "60": "240px",
        "64": "256px",
        "72": "288px",
        "80": "320px",
        "96": "384px",
        // Extra spacing blocks
        "112": "448px",
        "128": "512px",
        "144": "576px",
        "160": "640px",
        "176": "704px",
        "192": "768px",
        "208": "832px",
        "216": "864px",
        "224": "896px"
      })
    },
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
