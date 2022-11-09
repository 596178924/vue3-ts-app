import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    host: '0.0.0.0',
    port: 1950,
    https: false,
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname,"src"),
      '@v': path.resolve(__dirname,"src/views"),
      '@c': path.resolve(__dirname,"src/components"),
    }
  }
})
