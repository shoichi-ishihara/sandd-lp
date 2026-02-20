/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#111827',
        background: '#030712',
        surface: '#111827',
        textPrimary: '#f9fafb',
        textSecondary: '#9ca3af',
        accent: '#60a5fa',
        border: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.2)',
        'glow': '0 0 20px rgba(96, 165, 250, 0.3)',
        'glow-lg': '0 0 40px rgba(96, 165, 250, 0.4)',
      },
    },
  },
  plugins: [],
}
