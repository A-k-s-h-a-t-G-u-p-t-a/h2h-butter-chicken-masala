/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-850': '#1a1a1a',
        'gray-900': '#0a0a0a',
        premium: {
          black: '#0A0A0A',
          slate: '#1A1A1A',
          accent: '#6366F1',
          'accent-light': '#818CF8',
          'accent-dark': '#4F46E5',
        },
        surface: {
          primary: '#0F0F0F',
          secondary: '#1F1F1F',
          tertiary: '#2D2D2D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elevation-1': '0 4px 24px rgba(0,0,0,0.24)',
        'elevation-2': '0 8px 48px rgba(0,0,0,0.32)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}