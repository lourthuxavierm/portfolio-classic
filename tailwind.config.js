/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e4eeff',
          200: '#cdddff',
          300: '#a7c2ff',
          400: '#799cff',
          500: '#476dff',
          600: '#2b44ff',
          700: '#1d2fe6',
          800: '#1c28cc',
          900: '#1c2599',
        },
        accent: {
          50: '#fdf8f1',
          100: '#f9ecdc',
          200: '#f3d5b6',
          300: '#eab987',
          400: '#e19656',
          500: '#d87d35',
          600: '#c66527',
          700: '#a54d22',
          800: '#853e22',
          900: '#6c351e',
        }
      }
    },
  },
  plugins: [],
}
