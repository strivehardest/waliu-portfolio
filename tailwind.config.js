/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      fontFamily: {
        'neue-machina': ['var(--font-neue-machina)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Alternative if not using CSS variables:
        // 'neue-machina': ['Neue Machina', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
      },
      colors: {
        // Custom dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Portfolio accent colors that work in both themes
        accent: {
          light: '#3b82f6',  // Blue for light theme
          dark: '#60a5fa',   // Lighter blue for dark theme
        }
      },
      backgroundColor: {
        // Custom backgrounds
        'light-primary': '#ffffff',
        'light-secondary': '#f8fafc',
        'dark-primary': '#0f172a',
        'dark-secondary': '#1e293b',
      },
      textColor: {
        // Custom text colors
        'light-primary': '#1e293b',
        'light-secondary': '#475569',
        'dark-primary': '#f1f5f9',
        'dark-secondary': '#cbd5e1',
      },
      borderColor: {
        'light': '#e2e8f0',
        'dark': '#334155',
      },
      animation: {
        // Smooth transitions for theme switching
        'theme-transition': 'theme-fade 0.3s ease-in-out',
      },
      keyframes: {
        'theme-fade': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        }
      },
      screens: {
        'xs': '475px', // Extra small screens
      }
    },
  },
  plugins: [],
};