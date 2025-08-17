/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        'instrument-sans': ['var(--font-instrument-sans)'],
      },
      fontSize: {
        xl: '14px',
      },
    },
  },
  plugins: [],
};