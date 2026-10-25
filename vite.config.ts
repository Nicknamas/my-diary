import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@feed': fileURLToPath(new URL('./src/domains/feed', import.meta.url)),
      '@profile': fileURLToPath(new URL('./src/domains/profile', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
      '@ui-kit': fileURLToPath(new URL('./src/ui-kit', import.meta.url)),
    },
  },
})
