/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-out': 'bounceOut 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};