module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
      },
      keyframes: {
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'shine': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shine': 'shine 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}