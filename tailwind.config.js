/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      inter: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        dark900: '#292929',
        dark700: '#616161',
        dark500: '#F3F3F3',
        dark400: '#FBFBFB',
        brand: '#DA2535',
      },
      width: {
        128: '32.5rem',
        74: '18.25rem',
        clampW: 'clamp(19.5rem, 49vw ,37.75rem)',
      },
      height: {
        clampH: 'clamp(21.875rem, 49vw ,31.25rem)',
      },
      fontSize: {
        clamp1: 'clamp(1.5rem, 4.5vw, 3rem)',
      },
    },
  },
  plugins: [],
}
