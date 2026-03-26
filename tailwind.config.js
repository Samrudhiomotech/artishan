/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e7',
          100: '#fde7cf',
          200: '#fbcf9f',
          300: '#f9b76f',
          400: '#f79f3f',
          500: '#f5870f',
          600: '#c46c0c',
          700: '#935109',
          800: '#623606',
          900: '#311b03',
        },
        accent: {
          50: '#e7f1ff',
          100: '#cfe3ff',
          200: '#9fc7ff',
          300: '#6fabff',
          400: '#3f8fff',
          500: '#0f73ff',
          600: '#0c5ccc',
          700: '#094599',
          800: '#062e66',
          900: '#031733',
        }
      }
    },
  },
  plugins: [],
}