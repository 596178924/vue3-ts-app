/** @type {import('tailwindcss').Config} */
import {
  Scale
} from "./tailwind.configs/index"
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme: {
    extend: {},
    scale: Scale,
  },
  corePlugins: {
    // ...
    resize: false, //禁用调整大小
  },
  plugins: [],
}
