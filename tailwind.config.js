module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    minHeight : {
      '700' : '700px'
    },
    fontFamily : {
      'Comfortaa-bold' : ['Comfortaa-bold']
    },
    // height : {
      // 'fit' : 'fit-content'
    // }
  },
  plugins: [],
}