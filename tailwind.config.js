/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-dark' : '#171821',
        'secondary-dark' : '#21222D',
        'shelly': '#ECECEC',
        'sunflower' : '#FFBA03',
        'grey' : '#69696B',
        'note' : '#644F16',
        'pomodoro' : '#F44A1D'
      }
    },
  },
  plugins: [],
}