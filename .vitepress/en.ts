import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

const lang = "en";

export const en = defineConfig({
    lang: lang,

    themeConfig: {
        nav: nav(),

        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/tinyhttp/website/edit/master/:path',
            text: 'Edit this page on GitHub',
        },
        footer: {
            message: 'Released under the MIT License. Forked from <a href="https://github.com/wagmi-dev/viem/tree/main/site">viem docs</a>',
        },
    }
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Docs', link: '/en/docs/getting-started', activeMatch: '/docs' },
        {
            text: 'Examples',
            link: 'https://github.com/tinyhttp/tinyhttp/tree/master/examples',
        },
        {
            text: 'Contributing',
            link: 'https://github.com/tinyhttp/tinyhttp/blob/master/CONTRIBUTING.md',
        },
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            base: `/${lang}`,
            items: [
                {
                    text: 'Getting Started',
                    link: '/docs/getting-started',
                },
                {
                    text: 'Main Concepts',
                    link: '/docs/main-concepts',
                },
                {
                    text: 'Middleware',
                    link: '/docs/middleware',
                },
                {
                    text: 'Advanced',
                    link: '/docs/advanced',
                },
            ],
        },
        {
            text: 'API Reference',
            base: `/${lang}`,
            items: [
                {
                    text: 'Application',
                    link: '/docs/api/application',
                },
                {
                    text: 'Request',
                    link: '/docs/api/request',
                },
                {
                    text: 'Response',
                    link: '/docs/api/response',
                },
            ],
        }
    ]
}