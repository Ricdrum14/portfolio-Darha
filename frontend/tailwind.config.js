/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'card': 'transform, box-shadow',
      },
    },
  },
  plugins: [],
}

