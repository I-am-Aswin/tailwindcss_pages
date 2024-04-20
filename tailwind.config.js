/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: '#e640ff'
      },
      fontSize: {
        '2xs': '0.50rem',
        '3xs': '0.25rem'
      }
    },
  },
  plugins: [],
}

