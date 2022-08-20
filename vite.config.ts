import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ['vue'],
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        '@vueuse/head',
        // '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
