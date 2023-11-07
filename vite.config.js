import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Netflix-Clone----React-Firebase-Tailwind-CSS/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, }
})
