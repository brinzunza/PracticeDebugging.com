/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { 
            transform: 'translate(-25%, 25%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translate(0, 0)',
            opacity: '1'
          },
        }
      },
      animation: {
        'slideUp': 'slideUp 0.5s ease-out',
      }
    },
  },
  plugins: [],
}

