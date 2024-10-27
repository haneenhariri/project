/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'my-font': ['Montserrat', 'sans-serif'] ,
        'my-secound-font' :['Inter', 'sans-serif']
      },
      colors: {
       'my-black':'#282828',
       'my-secoundry':'#938C8C',
       'my-white':"#FFF",
       'my-gold':"rgba(40, 40, 40, 0.15)",
       'my-orange':'#FF8500',
       'my-silver':"rgba(255, 255, 255, 0.15)",
       'input-color': 'rgba(255, 255, 255, 0.76)'
      },
      screens: {
        'largeScreen': '1600px',
      },
    
    },
  },
  plugins: [],
}

