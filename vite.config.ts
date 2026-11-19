import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Served from https://apacjessie.github.io (a user site), so assets load from the root.
// If you deploy to a project repo instead (e.g. /portfolio), set base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
