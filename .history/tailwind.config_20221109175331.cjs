/** @type {import('tailwindcss').Config} */

// const borderRadius = {
//   none: '0',
//   sm: '.125rem',
//   md: '.25rem',
//   DEFAULT: ".25rem",
//   lg: '.5rem',
//   xl: '.75rem',
//   '2xl': '1rem',
//   full: '99999px'
// }
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme: {
    extend: {
      fontSize: {
        md: '.875rem',
        sm: '.75rem',
      }
    },
  },
  corePlugins: {
    // ...
    resize: false, //禁用调整大小
  },
  plugins: [],
}
