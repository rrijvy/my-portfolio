import { copyFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

const rootDir = dirname(fileURLToPath(import.meta.url))

function spaFallback404(): Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const dist = resolve(rootDir, 'dist')
      const index = resolve(dist, 'index.html')
      const fallback = resolve(dist, '404.html')
      if (existsSync(index)) {
        copyFileSync(index, fallback)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [vue(), VueDevTools(), spaFallback404()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
