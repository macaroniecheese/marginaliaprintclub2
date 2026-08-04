/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        mono: ['"Courier Prime"', 'monospace'],
        script: ['Caveat', 'cursive'],
      },
      colors: {
        parchment: {
          DEFAULT: '#F1E8D6',
          deep: '#E7DAB9',
        },
        ink: {
          DEFAULT: '#251F16',
          soft: '#4A4030',
        },
        madder: '#9C3427',
        neem: '#4A5A34',
        indigo: '#2E4057',
        zari: '#A9812E',
        rule: 'rgba(37,31,22,0.18)',
      },
    },
  },
  plugins: [],
};
