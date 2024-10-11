/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        nunito : ['Nunito Sans','Arial', 'sans-serif']
      },
      colors : {
        darkModeElements : 'hsl(209, 23%, 22%)',
        darkModeBg : 'hsl(207, 26%, 17%)',
        lightModeText :'hsl(200, 15%, 8%)',
        lightModeInput : 'hsl(0, 0%, 52%)',
        lightModeBg : 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

