import { defineConfig, createLogger } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/suman/',
  customLogger: {
    oxc: null,
    ...createLogger(),
    warn(msg, options) {
      console.log('SEEN WARNING:', JSON.stringify(msg)); // DEBUG
      if (msg.includes('Both esbuild and oxc options were set') || msg.includes('esbuild option is set to false')) return
      console.warn(msg, options)
    }
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
