import DefaultTheme from 'vitepress/theme'
import HomeFeatures from './components/HomeFeatures.vue'
import DownloadSection from './components/DownloadSection.vue'
import { NButton, NSpace, NIcon, NTag, NA, NP, NFlex, NConfigProvider } from 'naive-ui'
// 引入图标库
import { DownloadOutline, LogoApple, LogoWindows, EyeOutline } from '@vicons/ionicons5'
import './custom.css'

// 导入 Naive UI 样式
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('HomeFeatures', HomeFeatures)
    app.component('DownloadSection', DownloadSection)

    // 注册 Naive UI 组件
    app.component('NButton', NButton)
    app.component('NSpace', NSpace)
    app.component('NIcon', NIcon)
    app.component('NTag', NTag)
    app.component('NA', NA)
    app.component('NP', NP)
    app.component('NFlex', NFlex)
    app.component('NConfigProvider', NConfigProvider)

    // 注册图标组件
    app.component('DownloadOutline', DownloadOutline)
    app.component('LogoApple', LogoApple)
    app.component('LogoWindows', LogoWindows)
    app.component('EyeOutline', EyeOutline)

    // 在客户端导航时重新加载 GTM
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'pageview',
            page: window.location.pathname
          })
        }
      }
    }
  },
  setup() {
    // 在 body 开始处添加 GTM noscript
    if (typeof document !== 'undefined') {
      const noscript = document.createElement('noscript')
      const iframe = document.createElement('iframe')
      iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-PVDV5DQP'
      iframe.height = '0'
      iframe.width = '0'
      iframe.style.display = 'none'
      iframe.style.visibility = 'hidden'
      noscript.appendChild(iframe)
      document.body.insertBefore(noscript, document.body.firstChild)
    }
  }
}