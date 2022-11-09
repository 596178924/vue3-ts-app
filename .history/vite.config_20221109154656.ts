import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		open: false,
		host: "0.0.0.0",
		port: 1950,
		https: false,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@v": resolve(__dirname, "src/views"),
			"@c": resolve(__dirname, "src/components"),
		},
	},
});
