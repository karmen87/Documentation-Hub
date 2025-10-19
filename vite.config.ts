
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import mdx from '@mdx-js/rollup';
  import path from 'path';
  import remarkFrontmatter from 'remark-frontmatter';
  import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

  export default defineConfig({
    base: '/Documentation-Hub/',
    plugins: [
      mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
      react()
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