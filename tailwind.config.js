module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {

      colors:{
        primary:'#f01656',
        secondary:{
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
