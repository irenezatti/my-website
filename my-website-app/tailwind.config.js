module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        patrick: ['"Patrick Hand"', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
      },
      colors: {
        'custom-dark': '#473729',
        'custom-orange': '#BA5124',
        'custom-light': '#E8E1D3',
        'custom-gray': '#CCC1B2',
        'custom-yellow': '#DA8522',
        'custom-dark-brown': '#2E241B',  // Added darker brown color
      },
    },
  },
  plugins: [],
};
