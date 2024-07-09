/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#383452',
      primaryLight: "#ADA6D2",
      black: '#1C1A26',
      white: '#ffffff',
      grey:"#9B9B9B"
    }
  },
  plugins: [],
}