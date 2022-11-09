import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '/', // 开发或生产环境服务的公共基础路径 配置引入相对路径
	mode: 'development', // 模式
	publicDir: 'public', // 静态资源服务的文件夹
	cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
	server: {
		open: false,
		host: "0.0.0.0",
		port: 1950,
		strictPort: true, // 若端口已被占用则会直接退出
		https: false,
		origin: 'http://127.0.0.1:8080/',
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@v": resolve(__dirname, "src/views"),
			"@c": resolve(__dirname, "src/components"),
		},
		extensions: ['.mjs','.cjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要忽略的扩展名列表
	},
	clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
});
