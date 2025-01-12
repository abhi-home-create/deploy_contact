import { defineConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  },
  define: {
    'process.env.GOOGLE_SCRIPT_URL': JSON.stringify(process.env.GOOGLE_SCRIPT_URL)
  }
})