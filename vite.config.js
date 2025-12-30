import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // This is important for Neocities
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})