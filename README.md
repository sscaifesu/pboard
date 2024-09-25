# Pboard

Pboard 是一个为 Proxmox VE (PVE) 设计的轻量级、现代化的管理界面。它提供了一个直观、响应迅速的 Web 用户界面,用于管理和监控您的 PVE 环境。

## 功能特点

- 现代化的用户界面设计,提供流畅的用户体验
- 响应式布局,适配各种设备屏幕
- 安全的登录系统,支持多种认证方式
- 可自定义的服务器设置
- 本地数据持久化,提高使用便利性
- 流畅的动画效果,增强视觉体验

## 技术栈

- React
- TypeScript
- Tailwind CSS
- localStorage 用于数据持久化

## 快速开始

1. 克隆仓库:
   ```
   git clone https://github.com/sscaifesu/pboard.git
   ```

2. 安装依赖:
   ```
   cd pboard
   npm install
   ```

3. 启动开发服务器:
   ```
   npm start
   ```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 构建生产版本

运行以下命令构建生产版本:

```
npm run build
```

构建后的文件将位于 `build` 目录中。

## 贡献

欢迎贡献代码、报告问题或提出新功能建议。请遵循以下步骤:

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 Apache License 2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

项目维护者: evalEvil

项目链接: [Pboard](https://github.com/sscaifesu/pboard)