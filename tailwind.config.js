/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f6efe6',
        maroon: '#2d1d1f',
        terracotta: '#b77450',
        gold: '#c7a06d',
        rose: '#d1b6a3',
        sage: '#8d9a88'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        royal: '0 25px 60px rgba(41, 23, 18, 0.14)'
      }
    }
  },
  plugins: []
};

