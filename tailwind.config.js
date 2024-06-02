/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1023px' }
    },
    container: {
      center: true
    },
    extend: {}
  },
  plugins: []
}
