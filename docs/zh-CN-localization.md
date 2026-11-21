# GitHub Desktop 简体中文本地化（社区开发分支）

> 非 GitHub 官方发行版。此仓库仍在开发，不代表已经完成完整汉化或通过安装验收。
> GitHub 和 GitHub Desktop 的名称及图标权利属于各自权利人；本 Fork 不应冒充官方发行版本。

## 代码和分支

- 上游： https://github.com/desktop/desktop
- Fork： https://github.com/qssedalto/GitHub-Desktop-zh-CN
- 本地化开发分支： `feature/zh-cn-localization`
- Draft PR： https://github.com/qssedalto/GitHub-Desktop-zh-CN/pull/1

## 当前覆盖范围（部分）

- `app/src/lib/i18n.ts`：中文文案目录、English 回退、系统语言检测、手动选择持久化。
- **设置 → 外观**：增加 English / 简体中文选项；切换时重新载入界面，注意其他未保存的设置。
- **欢迎和身份验证**：欢迎页、登录界面、首次 Git 用户信息配置。
- **仓库操作**：空仓库引导、添加本地仓库、创建仓库、克隆仓库以及仓库列表中的部分操作。
- **分支与远程**：分支列表、空的拉取请求列表、分支菜单、获取/拉取/推送/发布按钮。
- **提交与文件**：提交编辑器核心控件、变更文件筛选、提交历史中的部分上下文菜单。
- 单元测试：`app/test/unit/i18n-test.ts`，覆盖语言选择优先级、中文 locale 解析和翻译回退。

没有接入 `t()` 的英文字符串仍然原样显示；不要推断上述模块已经“100% 翻译”。

## 待完成的主要部分

- 大部分 macOS 原生菜单和系统对话框（其文本位于 Electron 主进程）。
- Git 冲突、变基、合并、Stash 和 Worktree 详细流程与更多错误提示。
- Copilot、通知、账号和高级设置中未接入的文案。
- 动态文案、屏幕阅读器文本、帮助页面和部分文件操作快捷菜单。
- 开发包与官方发行版的应用标识、数据目录、更新渠道隔离。
- 在 macOS Apple Silicon 上运行编译、Lint、测试、交互及布局验收；目前无通过的自动化工作流结果。

## 验证建议

请使用不带空格的工作目录，并按仓库 `docs/contributing/setting-up-your-development-environment.md` 或上游当前构建文档准备工具链。此前在 `/Volumes/Macintosh SSD/...` 下运行 `npm ci` 触发了第三方 `node-gyp` 原生模块对路径空格处理失败；该问题不能证明此汉化分支编译成功或失败。

依赖安装成功后执行：

```bash
npm run test:unit -- app/test/unit/i18n-test.ts
npm run lint
npm run build:dev
```

请在确认生成包不会覆盖官方应用、不会复用生产账户与本地配置之前，不要把开发构建安装到正式应用位置。

## 维护约定

将每个新增 UI 文案加到 `app/src/lib/i18n.ts`，在组件里调用 `t('key', 'English fallback')`。保留原文默认值，避免修改 Git 仓库标识、Git 协议字段、分支名称和用户数据。
