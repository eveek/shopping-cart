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
      'hozer': 'rgb(244, 247, 255)',
      'hover': 'rgb(172, 223, 244)',
      'white': 'white',
      'black': 'black',
      'blue': 'rgb(33, 148, 235)',
      'grey': 'grey'
    },
    extend: {},
  },
  plugins: [],
}

