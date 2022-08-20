/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text-gray-color': '#5E5C7F',
        "secondary-color": "#FF4C60",
        "bg-dark":"#302F4E"
      },
    },
  },
  plugins: [],
}
