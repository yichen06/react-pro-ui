declare module 'ui-lib' {
  import { ComponentType } from 'react';
  export const UIButton: ComponentType<{
    children?: React.ReactNode;
    // 可根据实际props补充完整类型定义
  }>;
  // 补充其他导出组件类型...
}
