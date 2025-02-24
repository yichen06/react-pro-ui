import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 生成类型入口
      rollupTypes: true, // 将类型打包到单个文件
      include: ['src/**/*'],
      exclude: ['**/*.stories.tsx'], // 排除测试文件
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts', // 库的入口文件
      formats: ['es', 'cjs', 'umd'],
      name: 'ui-test',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // 避免打包 React
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
