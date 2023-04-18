/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c5dfa',
        'primary-light': '#9277ff',
        danger: '#ec5757',
        'danger-light': 'FF9797',
        clay: '#7e88c3',
        black: '#0c0e16',
        'lighter-grey': '#f8f8fb',
        'light-grey': '#dfe3fa',
        grey: '#888eb0',
        'dark-grey': '#494E6E',
        'darker-grey': '#373b53',
        'darkest-grey': '#141625',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('autoprefixer')],
};
