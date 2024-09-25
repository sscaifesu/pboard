# 贡献指南

感谢您对 Pboard 项目感兴趣!我们欢迎并感谢任何形式的贡献。本文档将指导您如何参与到项目中来。

## 行为准则

参与本项目的所有贡献者都应遵守我们的[行为准则](CODE_OF_CONDUCT.md)。请确保您已阅读并理解其内容。

## 如何贡献

### 报告 Bug

如果您发现了 bug,请通过 GitHub Issues 报告:

1. 检查是否已存在相关的 issue。
2. 如果没有,创建一个新的 issue。
3. 清晰地描述问题,包括复现步骤、预期行为和实际行为。
4. 如果可能,提供截图或错误日志。

### 提出新功能

我们欢迎新的想法!如果您有改进建议:

1. 创建一个新的 issue。
2. 标记为"enhancement"。
3. 详细描述您的想法,包括使用场景和潜在的实现方式。

### 提交代码

1. Fork 本仓库。
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)。
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)。
4. 推送到分支 (`git push origin feature/AmazingFeature`)。
5. 创建一个 Pull Request。

### Pull Request 指南

- 确保您的代码符合项目的编码规范。
- 更新文档以反映代码变更(如果适用)。
- 确保您的代码通过所有测试。
- 在 PR 描述中清晰地说明您的更改。

## 开发设置

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

## 编码规范

- 使用 TypeScript。
- 遵循 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)。
- 使用 2 空格缩进。
- 使用有意义的变量名和函数名。
- 编写清晰的注释。

## 许可证

本项目采用 Apache License 2.0 许可证。详细信息请参阅 [LICENSE](LICENSE)。
