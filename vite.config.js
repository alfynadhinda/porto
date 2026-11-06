import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' membuat build bisa jalan di https://username.github.io/ maupun /nama-repo/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
