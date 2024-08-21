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
        'dronolab-dark': '#3b3a3c',
        'dronolab-green': '#7ba62b',
        'dronolab-accent': '#9be812',
      },
    },
  },
  plugins: [],
}