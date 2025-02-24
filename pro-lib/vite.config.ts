import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['ui-lib'],
  },
  resolve: {
    alias: {
      'ui-lib': resolve(__dirname, '../ui-lib/src'),
    },
  },
});
