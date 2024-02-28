import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add the following lines
  base: '/my-app/',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Ensure the output directory is cleared before each build
  },
});
