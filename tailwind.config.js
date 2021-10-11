module.exports = {
  purge: ['./src/**/*.{jsx,js,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navc: {
          50: "rgb(46, 49, 71)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
