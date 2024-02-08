// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

      

      colors:{
        prb:'#3B82F6',
        'Gold':'#F4C95D',
      },
      patterns: {
        opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
        },
      },

      
      animation: {
        glow: 'glow .25s 5',
        transition: 'all ease-in-out'
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            color: 'transparent',
          },
          '50%': {
            color: 'white',
          },
        },
      },
      
    },
  },
  
  darkMode: "class",
  plugins: [
    require('tailwindcss-bg-patterns'),
    nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    // defaultTheme: "dark", // default theme from the themes object
    // defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {}, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {}, // dark theme colors
      },
      // ... custom themes
    },
  })],
}
export default config
