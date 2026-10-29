import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Requirement for Docker to allow access
    port: 5173,
    watch: {
      usePolling: true  // Required for Docker on Windows
    },
    proxy: {
      '/api': {
        target: 'http://backend:3000',  // Use service name in Docker
        changeOrigin: true
      }
    }
  }
})