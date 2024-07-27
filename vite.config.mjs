import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': 'https://localhost:3000'

    },
    proxy: {
      '/items': 'http://localhost:3000'
  },
  },
  build: {
    outDir: 'dist',
  },
});
