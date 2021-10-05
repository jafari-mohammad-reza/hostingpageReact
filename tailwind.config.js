module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#424D83',
      secondary: '#8C9EFC',
      primary1: '#384170',
      customWhite: '#EEEE',
      customGray: '#2E2E2E',
      startGold: '#FAD56B',
      FaceBookBlue: '#006AFF  ',
      lightGray: '#8f9091',
      lightGray2: '#c4c5c7',
      SuccessGreen: '#3c9524',
    },
  },
  variants: {
    export: {
      lineClamp: ['responsive'],
    },
  },
  plugins: [require('@neojp/tailwindcss-line-clamp-utilities')],
}
