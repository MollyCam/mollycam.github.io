export default ({
    title: 'MollyCam',
    description: '快递视频记录系统文档',
    lang: 'zh-CN',
    appearance: true,
    lastUpdated: true,
    // 设置源文件目录
    srcDir: './src',
    themeConfig: {
        logo: '/images/logo.png',
        siteTitle: 'MollyCam',
        nav: [
            { text: '认识 MollyCam', link: '/guide/who-am-i' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '在线体验', link: '/guide/download/' },
            { text: '常见问题', link: '/guide/faq/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '入门指南',
                    collapsed: false,
                    items: [
                        { text: '认识 MollyCam', link: '/guide/who-am-i' },
                        { text: '快速上手', link: '/guide/getting-started' },
                        { text: '功能特性', link: '/guide/features' },
                        { text: '下载指南', link: '/guide/download' },
                        { text: '部署指南', link: '/guide/deployment' },
                        { text: '常见问题', link: '/guide/faq' },
                    ]
                }
            ]
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/MollyCam/' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Molly Camera'
        },
        lastUpdatedText: '最后更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    },
    // 添加自定义CSS
    head: [
        ['link', { rel: 'stylesheet', href: '/theme/custom.css' }]
    ]
})