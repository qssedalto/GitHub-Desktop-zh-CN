/**
 * First-stage UI localization for this community fork.
 *
 * Keep English source text at call sites as the fallback. New translated strings
 * should be added to this catalogue rather than embedding language checks in UI.
 * This does not claim to translate operating-system menus or Git output.
 */
export type AppLanguage = 'en' | 'zh-CN'

const languageStorageKey = 'github-desktop-language'

const zhCN = {
  'welcome.title': '欢迎使用',
  'welcome.description': 'GitHub Desktop 让你轻松参与 GitHub 和 GitHub Enterprise 上的项目。登录后即可开始使用现有仓库。',
  'welcome.signInDotCom': '登录 GitHub.com',
  'welcome.signInEnterprise': '登录 GitHub Enterprise',
  'welcome.cancel': '取消',
  'welcome.newToGitHub': '还没有 GitHub 账号？',
  'welcome.createAccount': '免费注册账号',
  'welcome.skip': '跳过此步骤',
  'welcome.termsPrefix': '创建账号即表示你同意 GitHub 的',
  'welcome.terms': '服务条款',
  'welcome.privacyPrefix': '。有关 GitHub 如何保护隐私的信息，请参阅',
  'welcome.privacy': 'GitHub 隐私声明',
  'welcome.metrics': 'GitHub Desktop 会发送使用情况统计数据，以改进产品并指导功能设计。',
  'welcome.metricsMore': '了解使用情况统计数据',
  'welcome.configureGit': '配置 Git',
  'welcome.configureGitDescription': '这些信息用于标识你创建的提交。发布提交后，其他人也能看到这些信息。',
  'welcome.finish': '完成',
  'welcome.enterpriseTitle': '登录你的 GitHub Enterprise',
  'gitUser.exampleCommit': '提交示例',
  'gitUser.accountInfo': '使用我的 GitHub 账号名称和电子邮箱',
  'gitUser.enterpriseAccountInfo': '使用我的 GitHub Enterprise 账号名称和电子邮箱',
  'gitUser.manual': '手动配置',
  'gitUser.email': '电子邮箱',
  'gitUser.name': '名称',
  'gitUser.namePlaceholder': '你的姓名',
  'appearance.languageHeading': '语言',
  'appearance.languageLabel': '界面语言',
  'appearance.languageHint': '更改语言会重新加载 GitHub Desktop。尚未保存的其他设置可能丢失。',
  'appearance.theme': '主题',
  'appearance.light': '浅色',
  'appearance.dark': '深色',
  'appearance.system': '跟随系统',
  'appearance.loadingTheme': '正在加载系统主题',
  'appearance.formatting': '格式',
  'appearance.dateFormat': '日期格式',
  'appearance.timeFormat': '时间格式',
  'appearance.numberFormat': '数字格式',
  'appearance.preferAbsoluteDates': '优先显示绝对日期，而不是相对日期',
  'appearance.miscellaneous': '其他',
  'appearance.diffTabSize': '差异视图制表符宽度',
  'appearance.default': '默认',
  'appearance.alwaysShowWorktreeList': '始终显示工作树列表',
  'preferences.settings': '设置',
  'preferences.options': '选项',
  'preferences.accounts': '账号',
  'preferences.integrations': '集成',
  'preferences.appearance': '外观',
  'preferences.notifications': '通知',
  'preferences.prompts': '提示',
  'preferences.advanced': '高级',
  'preferences.accessibility': '辅助功能',
  'preferences.copilot': 'Copilot',
  'signIn.title': '登录',
  'signIn.browserTitle': '使用浏览器登录',
  'signIn.browserInfo': '登录后，浏览器会将你重定向回 GitHub Desktop。如果浏览器要求允许启动 GitHub Desktop，请予以允许。',
  'signIn.continue': '继续',
  'signIn.continueBrowser': '在浏览器中继续',
  'signIn.enterpriseAddress': '企业服务器地址',
  'signIn.as': '请在',
  'signIn.toContinue': '上登录，以继续操作。'
  "repos.welcome": "开始使用吧！",
  "repos.intro": "在 GitHub Desktop 中添加一个仓库，开始协作",
  "repos.clone": "克隆",
  "repos.resumeTutorial": "返回未完成的教程",
  "repos.createTutorial": "创建教程仓库…",
  "repos.cloneOnline": "从互联网克隆仓库…",
  "repos.createLocal": "在本地磁盘创建新仓库…",
  "repos.addLocal": "从本地磁盘添加现有仓库…",
  "repos.proTip": "小提示！",
  "repos.dragTip": "你可以将现有仓库文件夹拖放到此处，将其添加到 GitHub Desktop",
  "branches.branches": "分支",
  "branches.pullRequests": "拉取请求",
  "branches.mergeInto": "选择要合并到此分支的分支",
  "branches.default": "默认分支",
  "branches.recent": "最近使用的分支",
  "branches.other": "其他分支",
  "branches.new": "新建分支",
  "branches.fullName": "完整名称：",
  "branches.lastModified": "最后修改：",
  "branches.noMatch": "没有找到该分支",
  "branches.createInstead": "要改为创建一个新分支吗？",
  "branches.createNew": "创建新分支",
  "branches.proTip": "小提示！按",
  "branches.shortcut": "可在应用的任何位置快速创建新分支",
  "branches.prNotFound": "找不到对应的拉取请求！",
  "branches.loading": "正在加载",
  "branches.allSet": "一切就绪！",
  "branches.noOpenPr": "没有未关闭的拉取请求：",
  "branches.loadingPr": "正在加载拉取请求…",
  "branches.wouldLike": "你想要",
  "branches.createBranch": "创建新分支",
  "branches.startProject": "并开始下一个项目吗？",
  "branches.createPr": "创建拉取请求",
  "branches.fromCurrent": "以当前分支为基础吗？",
  "branches.chooseBase": "选择基础分支",
  "branches.base": "基础分支：",
  "sync.lastFetched": "上次获取时间：",
  "sync.neverFetched": "从未获取",
  "sync.publishRepository": "发布仓库",
  "sync.publishRepositoryDescription": "将此仓库发布到 GitHub",
  "sync.publishBranch": "发布分支",
  "sync.publishBranchGitHub": "将此分支发布到 GitHub",
  "sync.publishBranchRemote": "将此分支发布到远程仓库",
  "sync.rebaseInProgress": "正在变基",
  "sync.cannotPublishDetached": "无法发布游离 HEAD",
  "sync.fetch": "获取",
  "sync.pull": "拉取",
  "sync.pullRebase": "拉取并变基",
  "sync.push": "推送",
  "sync.forcePush": "强制推送",
  "sync.working": "正在处理…",
  "branch.current": "当前分支",
  "branch.detached": "游离 HEAD",
  "branch.on": "当前提交：",
  "branch.is": "当前分支：",
  "branch.detachedTooltip": "当前处于游离 HEAD 状态",
  "commit.manual": "提交",
  "commit.manualDesc": "自行填写提交摘要和详细说明。",
  "commit.copilot": "使用 Copilot 提交",
  "commit.copilotDesc": "Copilot 将所选改动分成多个提交，并自动编写提交信息。",
  "commit.commit": "提交",
  "commit.committing": "正在提交",
  "commit.amend": "修订",
  "commit.amending": "正在修订",
  "commit.last": "上一次提交",
  "commit.summaryRequired": "必须填写提交摘要",
  "commit.selectFiles": "请至少选择一个文件进行提交",
  "commit.committingChanges": "正在提交更改…",
  "commit.files": "个文件",
  "commit.to": "到",
  "commit.summaryPlaceholder": "摘要（必填）",
  "commit.descriptionPlaceholder": "说明",
  "commit.createPr": "创建拉取请求",
  "commit.undo": "撤销提交",
} as const

export type TranslationKey = keyof typeof zhCN

/**
 * Respect an explicit choice first; otherwise use the system locale.
 * An unsupported or missing locale falls back to English.
 */
export function getAppLanguage(): AppLanguage {
  const saved = localStorage.getItem(languageStorageKey)
  if (saved === 'en' || saved === 'zh-CN') {
    return saved
  }

  return typeof navigator !== 'undefined' &&
    /^zh(?:[-_]|$)/i.test(navigator.language)
    ? 'zh-CN'
    : 'en'
}

/** Returns the translation for the active language, with an English fallback. */
export function t(key: TranslationKey, english: string): string {
  return getAppLanguage() === 'zh-CN' ? zhCN[key] : english
}

/**
 * Persist the choice and reload the renderer so UI mounted outside React's
 * settings tree also receives the new language.
 */
export function setAppLanguage(language: AppLanguage): void {
  if (language === getAppLanguage()) {
    return
  }

  localStorage.setItem(languageStorageKey, language)
  window.location.reload()
}
