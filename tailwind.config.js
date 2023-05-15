const { pink } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('../public/blob1.png')",
      },
      colors: {
        backgroundcolor: '#1d1b28',
        purp: '#ccc2dc',
        pinkish: '#efb8c8'
      }
    },
  },
  plugins: [],
}