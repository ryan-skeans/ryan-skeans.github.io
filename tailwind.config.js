/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#121212',
          800: '#1e1e1e',
          700: '#2d2d2d',
        },
        primary: {
           DEFAULT: '#027E6F', // Teal
           hover: '#02695c', // Darker Teal
           light: '#038c7f', // Lighter Teal
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

