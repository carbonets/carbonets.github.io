/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'navbar-size': '880px',
    },
    extend: {
      colors: {
        'carbonets-dark': '#303131',
        'carbonets-green': '#50E59D',
        'carbonets-dark-green': '#06402B',
        'carbonets-blue': '#48CEFF',
      },
    },
  },
  plugins: [],
}