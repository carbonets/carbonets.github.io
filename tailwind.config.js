/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'navbar-size': '880px',
    },
    extend: {
      colors: {
        'carbonets-dark': '#303131',
        'carbonets-green': '#50E59D',
        'carbonets-blue': '#48CEFF',
      },
    },
  },
  plugins: [],
}