/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
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
