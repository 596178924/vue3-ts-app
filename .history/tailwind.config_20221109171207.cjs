/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme: {
    extend: {},
    scale: {
      "0": "0",
	"25": ".25",
	"50": ".5",
	"75": ".75",
	"90": ".9",
	"95": ".95",
	"100": "1",
	"105": "1.05",
	"110": "1.1",
	"125": "1.25",
	"150": "1.5",
	"200": "2",
    },
  },
  corePlugins: {
    // ...
    resize: false, //禁用调整大小
  },
  plugins: [],
}
