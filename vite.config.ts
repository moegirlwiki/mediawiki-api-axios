import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      name: 'MediaWikiApi',
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es', 'iife', 'umd'],
    },
    sourcemap: true,
  },
  define: {
    // @FIX Uncaught ReferenceError: process is not defined
    // @link https://github.com/vitejs/vite/issues/9186
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [dts()],
})
