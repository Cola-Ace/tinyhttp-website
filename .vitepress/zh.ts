import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

const lang = "zh";

export const zh = defineConfig({
    lang: lang,

    themeConfig: {
        nav: nav(),

        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/tinyhttp/website/edit/master/:path',
            text: '在 GitHub 上编辑本界面',
        },
        footer: {
            message: '基于 MIT 许可发布<br> Forked from <a href="https://github.com/wagmi-dev/viem/tree/main/site">viem docs</a>',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '文档', link: `/${lang}/docs/getting-started`, activeMatch: '/docs' },
        {
            text: '示例',
            link: 'https://github.com/tinyhttp/tinyhttp/tree/master/examples',
        },
        {
            text: '贡献',
            link: 'https://github.com/tinyhttp/tinyhttp/blob/master/CONTRIBUTING.md',
        },
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '介绍',
            base: `/${lang}`,
            items: [
                {
                    text: '开始使用',
                    link: '/docs/getting-started',
                },
                {
                    text: '主要概念',
                    link: '/docs/main-concepts',
                },
                {
                    text: '中间件',
                    link: '/docs/middleware',
                },
                {
                    text: '进阶',
                    link: '/docs/advanced',
                },
            ],
        },
        {
            text: 'API 参考',
            base: `/${lang}`,
            items: [
                {
                    text: '应用',
                    link: '/docs/api/application',
                },
                {
                    text: '请求体',
                    link: '/docs/api/request',
                },
                {
                    text: '响应体',
                    link: '/docs/api/response',
                },
            ],
        }
    ]
}