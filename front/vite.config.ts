import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
    },
    server: {
        // host: true,
        proxy: {
            '/api/v1': {
              target: 'http://localhost:8080',
              changeOrigin: true,             
            //   rewrite: (path) => path.replace(/^\/api/, '') 
            }
          }
    },
    base: './',
});
