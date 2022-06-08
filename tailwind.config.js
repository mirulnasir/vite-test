module.exports = {
  important: '#root',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Party Confetti',
        body: 'PT Sans',
        mono: 'PT Mono'
      }
    },
  },
  plugins: [],
}