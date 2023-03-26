/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark' : '#171821',
        'secondary-dark' : '#21222D'
      }
    },
  },
  plugins: [],
}