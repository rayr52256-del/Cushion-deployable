/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4FBF7',
          100: '#E6F6ED',
          200: '#C2EAD2',
          300: '#92D7B0',
          400: '#5CBD88',
          500: '#34A269',
          600: '#268252',
          700: '#1E6742',
          800: '#1A5236',
          900: '#16432D',
          950: '#0B2519',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
          muted: '#F3F4F6',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 12px 32px -4px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
