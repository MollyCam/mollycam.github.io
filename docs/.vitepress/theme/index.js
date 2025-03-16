import DefaultTheme from 'vitepress/theme'
import HomeFeatures from './components/HomeFeatures.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('HomeFeatures', HomeFeatures)
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