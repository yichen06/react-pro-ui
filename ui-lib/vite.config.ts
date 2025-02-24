import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      rollupTypes: true,
      copyDtsFiles: true,
      outDir: 'dist',
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'ui-lib',
      fileName: (format) => `index.${format}.js`,
    },
    watch: {
      // 关键配置：启用构建监听
      include: ['src/**'],
    },
    minify: false, // 开发阶段关闭压缩
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        // dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
