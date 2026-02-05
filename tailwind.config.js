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
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B',
        },
        royal: {
          gold: '#D4AF37',
          blue: '#1A365D',
          navy: '#0F172A',
        },
        slate: {
          900: '#111827',
          800: '#1F2937',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #0A192F 0%, #112240 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
      }
    },
  },
  plugins: [],
}
