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
        // Paper — the base, lots of it
        paper: {
          DEFAULT: '#FAFAF7',
          warm: '#F5F2EC',
          deep: '#EDE8DF',
          line: '#E2DDD3',
        },
        // Ink — the text
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#3D3D3D',
          light: '#6B6B6B',
          faint: '#9A9A9A',
        },
        // Accent — per-archive, defaults to madder red
        accent: {
          DEFAULT: '#9C3427',
          dark: '#6B2419',
          light: '#C75D4E',
        },
        // Secondary — for occasional contrast
        neem: '#4A5A34',
        indigo: '#2E4057',
        zari: '#A9812E',
        rule: 'rgba(26,26,26,0.12)',
      },
      letterSpacing: {
        widest: '0.24em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
