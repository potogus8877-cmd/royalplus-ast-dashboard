import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'royal': {
          50: '#f0f9f3',
          100: '#d4efe0',
          200: '#a8debd',
          300: '#6cc899',
          400: '#38B54A',
          500: '#2d9a3a',
          600: '#237d2f',
          700: '#1a6025',
          800: '#13471b',
          900: '#0d2e11',
        },
        'lime': {
          50: '#f8fbf3',
          100: '#eef5d9',
          200: '#ddeaad',
          300: '#c9db7b',
          400: '#9ACA3C',
          500: '#7fb020',
          600: '#679516',
          700: '#50770f',
          800: '#3e5a0a',
          900: '#2d4005',
        },
        'brown': {
          50: '#faf7f4',
          100: '#f3ebe2',
          200: '#e5d5c1',
          300: '#d4b89a',
          400: '#5A2D0C',
          500: '#4a2408',
          600: '#3a1c06',
          700: '#2d1504',
          800: '#210d02',
          900: '#180601',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 12px 32px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
