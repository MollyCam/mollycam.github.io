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
            copyright: 'Copyright © 2025 MollyCam. All rights reserved.'
        },
        lastUpdatedText: '最后更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        // 添加 Google Analytics 配置
        analytics: {
            gtag: {
                id: 'G-XXXXXXXXXX'
            }
        },
    },
    // 添加自定义CSS
    head: [
        ['link', { rel: 'stylesheet', href: '/theme/custom.css' }],

        // Google Tag Manager 头部代码
        [
            'script',
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVDV5DQP');`
        ]
    ]
})