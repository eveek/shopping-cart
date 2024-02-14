/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Prompt', 'sans-serif']
    },
    colors: {
      'hover': '#e5e7eb',
      'white': 'white',
      'black': 'black'
    },
    extend: {},
  },
  plugins: [],
}

