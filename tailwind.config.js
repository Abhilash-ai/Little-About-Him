/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF8',
          100: '#FAF6F0',
          200: '#F5ECE1',
          300: '#EADBC8',
          DEFAULT: '#FAF6F0',
        },
        blush: {
          50: '#FFF7F8',
          100: '#FFEBEF',
          200: '#FFD7DF',
          300: '#FFB8C6',
          400: '#F689A1',
          500: '#E85D75',
          DEFAULT: '#FFEBEF',
        },
        peach: {
          50: '#FFF9F5',
          100: '#FFEFE5',
          200: '#FFDBC7',
          300: '#FFBCA0',
          400: '#FA8F6E',
          DEFAULT: '#FFEFE5',
        },
        honey: {
          50: '#FFFDF5',
          100: '#FFF8E1',
          200: '#FFECB3',
          300: '#FFE082',
          400: '#FFD54F',
          500: '#FFCA28',
          DEFAULT: '#FFF8E1',
        },
        mint: {
          50: '#F4FAF6',
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          DEFAULT: '#E8F5E9',
        },
        lavender: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          DEFAULT: '#F3E8FF',
        },
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          DEFAULT: '#E0F2FE',
        },
        burgundy: {
          500: '#C85250',
          600: '#B03A48',
          700: '#922736',
          800: '#731C28',
          900: '#52121C',
          DEFAULT: '#922736',
        },
        warmBrown: {
          300: '#BCAAA4',
          500: '#795548',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
          DEFAULT: '#4E342E',
        },
        gold: {
          300: '#FFF2B2',
          400: '#F9DD68',
          500: '#E5C03D',
          600: '#C49E1E',
          DEFAULT: '#E5C03D',
        },
        terracotta: '#D96B5B',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        handwriting: ['"Caveat"', 'cursive'],
        doodle: ['"Gaegu"', 'cursive'],
      },
      boxShadow: {
        'cute': '0 10px 25px -5px rgba(220, 150, 160, 0.25), 0 8px 10px -6px rgba(200, 120, 130, 0.15)',
        'cute-lg': '0 20px 35px -10px rgba(210, 140, 150, 0.35), 0 10px 15px -8px rgba(180, 100, 110, 0.2)',
        'polaroid': '0 12px 28px -6px rgba(140, 90, 80, 0.18), 0 0 1px 1px rgba(255, 255, 255, 0.8)',
        'paper': '0 6px 16px -3px rgba(120, 80, 70, 0.1), 0 2px 6px -2px rgba(120, 80, 70, 0.06)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'pulse-cute': 'pulseCute 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pulseCute: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
