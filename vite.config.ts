
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import mdx from '@mdx-js/rollup';
  import path from 'path';

  export default defineConfig({
    base: '/Build-Documentation-Hub/',
    plugins: [
      react(),
      mdx()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });