/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: { Inter: ["Inter", "serif"] },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
