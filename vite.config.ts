/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const productsProxy = {
  '/econverse-api': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/econverse-api/, ''),
  },
}

export default defineConfig({
  plugins: [react()],
  server: { proxy: productsProxy },
  preview: { proxy: productsProxy },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
