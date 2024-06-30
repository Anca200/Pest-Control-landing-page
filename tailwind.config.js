/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heroFont: ["Roboto"]
      }
    },
    
      backgroundImage: {
       "footerImage" : "url('../../src/assets/footerImg.webp')"
      }
    
  },
  plugins: [],
}