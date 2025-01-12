/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/App.css",
    "./src/*{jsx,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

