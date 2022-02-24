import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入 path 模块，报错需 npm i @types/node -D
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      // 全局 scss
      scss: {
        additionalData: '@import "@/assets/style/variables.scss";'
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      // 别名对应的路径需要使用绝对路径
      '@': resolve(__dirname, 'src')
    }
  }
})
