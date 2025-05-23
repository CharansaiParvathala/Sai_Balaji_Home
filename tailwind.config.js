/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f0faf5',
          100: '#d1f0e2',
          200: '#a3e6cf',
          300: '#75dcbc',
          400: '#47d2a9',
          500: '#2eb894',
          600: '#199b7b',
          700: '#0d7d62',
          800: '#066049',
          900: '#034330',
        },
        aqua: {
          50: '#f0f9fb',
          100: '#d1eef4',
          200: '#a3e3ed',
          300: '#75d8e6',
          400: '#47cddf',
          500: '#2eb4c6',
          600: '#1997a9',
          700: '#0d7a8c',
          800: '#065d6f',
          900: '#034052',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};