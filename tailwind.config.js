const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      rockSalt: ['"Rock Salt"', 'cursive']
    },
    extend: {
      colors: {
        primary: colors.lightBlue,
        secondary: '#00539f'
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
