import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html'
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          animation: ['framer-motion']
        }
      }
    }
  }
})
