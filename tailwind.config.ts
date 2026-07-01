import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      colors: {
        ink:          '#1a1917',
        paper:        '#f7f4ef',
        'paper-dark': '#ece8e0',
        accent:       '#2d6a4f',
        'accent-light':'#e8f4ef',
        warm:         '#c8622a',
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease forwards 0.3s',
      },
      keyframes: {
        fadeIn: {
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
