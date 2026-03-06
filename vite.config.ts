import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = new URL('.', import.meta.url).pathname

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about/about.html'),
      },
    },
  },
})