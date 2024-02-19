/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '540px',
      // => @media (min-width: 540px) { ... }
    },
  },
  plugins: [],
}