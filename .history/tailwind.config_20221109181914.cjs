/** @type {import('tailwindcss').Config} */
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
