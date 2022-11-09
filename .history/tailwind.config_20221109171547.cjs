/** @type {import('tailwindcss').Config} */
import theme from "./theme.config.js"
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme,
  corePlugins: {
    // ...
    resize: false, //禁用调整大小
  },
  plugins: [],
}
