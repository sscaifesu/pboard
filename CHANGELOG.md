# 更新日志
## [0.0.2] - 2024-09-26

### 新增
- 更换了登录页面背景动画
- 添加了加密/解密工具 `encryption.ts`
- 实现了 `AuthContext` 用于全局状态管理
- 添加了单元测试文件 `Login.test.tsx`

### 变更
- 更新了 `Login` 组件，使用新的加密/解密工具存储敏感信息
- 修改了 `AuthProvider` 组件的类型定义
- 优化了 `DynamicBackground` 组件的性能

### 优化
- 改进了类型定义，修复了 TypeScript 错误
- 使用 `React.memo` 优化了 `SettingsDialog` 组件的性能
- 增强了组件的可访问性，添加了 ARIA 属性

### 安全性
- 实现了使用 `sessionStorage` 存储加密的敏感信息

### 文档
- 更新了 `README.md`，添加了更多项目信息和使用说明
- 创建了 `CONTRIBUTING.md`，提供了详细的贡献指南

## [0.0.1] - 2024-09-24

### 新增
- 实现了登录表单数据的本地存储功能，防止页面刷新后数据丢失
- 添加了服务器设置功能，允许用户配置服务器地址、端口和认证方式
- 创建了生产环境服务器文件 `prod.js`，增强了安全性和错误处理

### 变更
- 更新了 `App.tsx`，使用 `localStorage` 保存和恢复表单数据
- 修改了登录表单布局，增加了设置按钮
- 优化了表单验证和错误提示
- 将后端服务器代码从 JavaScript 转换为 TypeScript
- 删除了旧的 `server/index.js` 和 `server/prod.js` 文件
- 新增了 `server/src/dev.ts` 和 `server/src/prod.ts` 文件

### 安全性
- 在生产环境中实现了 CORS 限制
- 添加了速率限制以防止 API 滥用
- 使用 `helmet` 中间件增强了 HTTP 头部安全性

### 开发体验
- 更新了 `server/README.md`，提供了详细的设置和使用说明
- 分离了开发环境（`index.js`）和生产环境（`prod.js`）的服务器配置

### 性能
- 优化了登录请求设置了超时时间

### 文档
- 添加了 `CHANGELOG.md` 文件，记录项目的重要变更