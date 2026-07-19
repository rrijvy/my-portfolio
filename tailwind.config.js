/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '1120px'
      }
    },
    extend: {
      colors: {
        paper: '#EFF1F4',
        ink: '#0C2340',
        mist: '#D8DEE7',
        sky: {
          DEFAULT: '#0284C7',
          soft: '#E0F2FE'
        },
        moss: {
          DEFAULT: '#3F6F57',
          soft: '#E8F0EB'
        },
        ember: {
          DEFAULT: '#C2410C',
          soft: '#FFEDD5'
        }
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        content: '1120px'
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(2, 132, 199, 0.45)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards'
      }
    }
  },
  plugins: []
}
