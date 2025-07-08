// @ts-check
// `@type` JSDoc注释可启用编辑器自动补全和类型检查（需配合`@ts-check`）
// Docusaurus配置有多种等效声明方式
// 参考：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// 此文件运行在Node.js环境中，请勿使用客户端代码（如浏览器API、JSX等）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zhengddzz文档', // 网站标题
  tagline: 'zhengddzz服务的文档', // 网站副标题
  favicon: 'img/favicon.ico', // 网站图标（浏览器标签页）

  // 未来功能标志，提高与Docusaurus v4的兼容性
  future: {
    v4: true,
  },

  // 生产环境网站URL（替换为你的实际域名）
  url: 'https://docs.zhengddzz.com/',
  // 网站基础路径（GitHub Pages部署可能需要改为'/项目名/'）
  baseUrl: '/',

  // GitHub Pages部署配置（非GitHub Pages可忽略）
  organizationName: 'zhengddzz', // 你的GitHub用户名
  projectName: 'help', // 你的仓库名称

  // 处理断链的策略：throw（报错终止）、warn（警告）、ignore（忽略）
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国际化配置（默认语言为中文）
  i18n: {
    defaultLocale: 'zh-Hans', // 改为中文
    locales: ['zh-Hans'],
  },

  // 预设配置（集成文档、主题等核心功能）
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // 侧边栏配置文件路径
          // 编辑页面的链接（修改为你的仓库地址）
          editUrl: 'https://github.com/zhengddzz/help/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css', // 自定义CSS路径
        },
      }),
    ],
  ],

  // 主题配置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 社交分享卡片图片
      image: 'img/docusaurus-social-card.jpg',
      navbar: { // 导航栏配置
        title: 'zhengddzz文档',
        logo: {
          alt: '网站Logo',
          src: 'img/logo.svg',
        },
        items: [ // 导航栏菜单
          {
            type: 'doc', // 指向单个文档
            docId: 'mc', // 文档ID（对应docs/mc.mdx，或docs/mc/index.mdx的id）
            position: 'left',
            label: 'MC服务器指南', // 导航项显示名称
          },
        ],
      },
      footer: { // 页脚配置
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '入门指南',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'MC服务器玩家交流群（QQ群）',
                href: 'https://qm.qq.com/q/yqqRzJYqBk',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zhengddzz/help/',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} zhengddzz，基于Docusaurus构建。`,
      },
      // 代码高亮主题
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
