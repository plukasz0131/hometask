import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // Set '@' to point to 'src' directory
    },
  },
  server: {
    port: 3000, // or another port of your choice
  },
})
