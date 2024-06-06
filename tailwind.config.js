/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
      colors: {
        'dark-Blue':'hsl(233, 26%, 24%)',
        'lime-Green':'hsl(136, 65%, 51%)',
        'bright-Cyan':'hsl(192, 70%, 51%)',
        'grayish-Blue':'hsl(233, 8%, 62%)',
        'light-Grayish-Blue':'hsl(220, 16%, 96%)',
        'very-Light-Gray':'hsl(0, 0%, 98%)',
        'white':'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        publicsans: ["Public Sans", 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url(../src/assets/images/bg-intro-desktop.svg)",
      },
    },
  },
  
  plugins:[],
  // ...
}