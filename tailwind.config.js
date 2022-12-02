/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        greenLight: "#00dfc4",
        pozadina: "rgb(20, 20, 58)",
        placeholder: "rgb(70, 69, 80)",
        bgColor: "#002",
        btnBackground: "#002",
        textColor: 'rgb(130, 129, 138)',
        pozadina: 'rgb(46, 46, 96)'

      }
    },
  },
  plugins: [],
}
