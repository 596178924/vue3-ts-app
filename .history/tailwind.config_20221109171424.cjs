/** @type {import('tailwindcss').Config} */
import theme from "./theme.config.json"
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme: theme,
  corePlugins: {
    // ...
    resize: false, //禁用调整大小
  },
  plugins: [],
}
