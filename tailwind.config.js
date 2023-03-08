/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        FooterBg: "url('/src/assets/images/Footer.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
