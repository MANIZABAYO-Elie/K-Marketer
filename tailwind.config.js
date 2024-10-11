/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/.{html,js}"],
  theme: {
    extend: {
      
        backgroundImage: {
          'background': "url('/images/background.jpg')",
          
        }
    },
  },
  plugins: [],
}

