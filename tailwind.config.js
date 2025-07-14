/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Use the `.eco` class anywhere in the DOM to enable Eco Mode utilities (Tailwind dark mode under the hood)
  darkMode: ['class', 'eco'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        neutral: 'var(--color-neutral)',
        light: 'var(--color-light)',
        surface: 'var(--color-background)',
      },

    },
  },
  plugins: [],
};
