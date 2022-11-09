import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://www.weipxiu.com/8649.html 查看配置项
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '/', // 开发或生产环境服务的公共基础路径 配置引入相对路径
	mode: 'development', // 模式
	publicDir: 'public', // 静态资源服务的文件夹
	cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
	build:{
		outDir: 'dist', // 指定输出路径
		cssCodeSplit: true, // 启用 CSS 代码拆分
		sourcemap: false, // 构建后是否生成 source map 文件
		terserOptions: {
			compress: {
				//生产环境时移除console.log()
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
	server: {
		open: false,
		host: "0.0.0.0",
		port: 1950,
		strictPort: true, // 若端口已被占用则会直接退出
		https: false,
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
