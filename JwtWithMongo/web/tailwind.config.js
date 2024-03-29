/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '482px',
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}