/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate';

export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [animate],
}
