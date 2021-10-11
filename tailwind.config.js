module.exports = {
  purge: ['./src/**/*.{jsx,js,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navc: {
          50: "rgb(46, 49, 65)",
          100: "rgb(34, 37, 57)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
