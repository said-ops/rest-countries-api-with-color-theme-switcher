/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
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
        element : {
          light:'hsl(0, 0%, 100%)',
          dark : 'hsl(209, 23%, 22%)'
        },
        bg : {
          light :'hsl(0, 0%, 98%)',
          dark : 'hsl(207, 26%, 17%)',
        },
        text : {
          light : 'hsl(200, 15%, 8%)',
          dark : 'hsl(0, 0%, 100%)',
        },
        input : {
          light : 'hsl(0, 0%, 52%)',
          dark : 'hsl(209, 23%, 22%)'
        },
      }
    },
  },
  plugins: [],
}

