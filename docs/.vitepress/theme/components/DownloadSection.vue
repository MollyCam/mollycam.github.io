<template>
  <div class="download-container">
    <div class="download-header">
      <div class="product-info">
        <img src="/images/logo.svg" alt="MollyCam Logo" class="product-logo" />
        <div class="product-details">
          <h3 class="product-name">小茉莉相机 </h3>
          <p class="product-version">MollyCam 最新版本: v{{ latestVersion }}</p>
        </div>
      </div>
    </div>

    <div class="download-content">
      <p class="system-detection">
        MollyCam 同时支持 MacOS 和 Windows 系统 <br>
      </p>
      <div class="download-buttons">
        <n-button type="primary" size="large" class="main-download-btn" @click="handleDownload(mainDownloadLink)">
          <template #icon>
            <n-icon>
              <component :is="currentSystemIcon"></component>
            </n-icon>
          </template>
          立即下载 {{ mainDownloadText }}
        </n-button>
      </div>
      <p class="system-detection">
        检测到你的系统是: <strong>{{ detectedSystem }}</strong> <br>
        也可以手动选择所需系统：
      </p>

      <div class="other-versions">
        <div class="version-list">
          <div v-for="system in availableSystems" :key="system.id" class="version-item"
            :class="{ 'active': system.id === detectedSystemId }" @click="selectSystem(system.id)">
            <div class="version-header">
              <div class="version-icon">
                <n-icon size="48">
                  <component :is="system.icon"></component>
                </n-icon>
              </div>
              <div class="version-info">
                <p class="version-name">{{ system.name }}</p>
                <p class="version-detail">{{ system.detail }}</p>
              </div>
            </div>
            <div class="version-footer">
              <div v-if="system.downloadLink" class="version-action">
                <n-button type="primary" size="medium" class="version-download-btn"
                  @click.stop="handleDownload(system.downloadLink)">
                  下载客户端
                </n-button>
              </div>
              <div v-else class="version-coming-soon">
                <n-tag type="success" :bordered="false" disabled size="small">Coming Soon …</n-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { LogoApple, LogoWindows } from '@vicons/ionicons5'

// 版本信息
const latestVersion = ref('0.2.1')

// 系统检测
const detectedSystemId = ref('mac-intel')
const detectedSystem = ref('macOS (Intel)')

// 可用系统
const availableSystems = ref([
  {
    id: 'mac-intel',
    name: 'macOS (Intel)',
    detail: `v${latestVersion.value} · Intel 版本`,
    icon: LogoApple,
    downloadLink: 'https://mollycam-download.oss-cn-hangzhou.aliyuncs.com/mac/MollyCam-0.2.1.dmg' // 请替换为实际的 Intel 版本下载链接
  },
  {
    id: 'mac-silicon',
    name: 'macOS (Apple Silicon)',
    detail: `v${latestVersion.value} · Apple Silicon 版本`,
    icon: LogoApple,
    downloadLink: 'https://mollycam-download.oss-cn-hangzhou.aliyuncs.com/mac/MollyCam-0.2.1-arm64.dmg' // 请替换为实际的 Apple Silicon 版本下载链接
  },
  {
    id: 'windows',
    name: 'Windows',
    detail: '即将推出',
    icon: LogoWindows,
    downloadLink: ''
  }
])

// 计算主下载链接和文本
const mainDownloadLink = computed(() => {
  const system = availableSystems.value.find(s => s.id === detectedSystemId.value)
  return system ? system.downloadLink : availableSystems.value[0].downloadLink
})

const mainDownloadText = computed(() => {
  const system = availableSystems.value.find(s => s.id === detectedSystemId.value)
  return system ? `${system.name} 客户端` : '客户端'
})

// 计算当前系统图标
const currentSystemIcon = computed(() => {
  const system = availableSystems.value.find(s => s.id === detectedSystemId.value)
  return system ? system.icon : LogoApple
})

// 选择系统
function selectSystem(systemId) {
  detectedSystemId.value = systemId
  detectedSystem.value = availableSystems.value.find(s => s.id === systemId).name
}

// 处理下载
function handleDownload(url) {
  if (url === '#') {
    // Windows 版本暂未推出
    window.$message?.warning('Windows 版本即将推出，敬请期待！')
    return
  }
  window.open(url, '_blank')
}

// 检测系统
onMounted(() => {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('windows')) {
    detectedSystemId.value = 'windows'
    detectedSystem.value = 'Windows'
  } else if (userAgent.includes('mac')) {
    if (userAgent.includes('arm')) {
      detectedSystemId.value = 'mac-silicon'
      detectedSystem.value = 'macOS (Apple Silicon)'
    } else {
      detectedSystemId.value = 'mac-intel'
      detectedSystem.value = 'macOS (Intel)'
    }
  }
})
</script>

<style scoped>
.download-container {
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 12px;
  overflow: hidden;
}

.download-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-dark));
  color: white;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-logo {
  width: 64px;
  height: 64px;
  margin-right: 1rem;
  border-radius: 12px;
}

.product-name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.product-version {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.download-content {
  padding: 1.5rem;
}

.system-detection {
  margin: 1rem 0;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  text-align: center;
}

.download-buttons {
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

/* 修改 Naive UI 按钮样式 */
.main-download-btn {
  min-width: 200px !important;
}

.download-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.download-primary {
  font-weight: 600;
  font-size: 1.1rem;
}

.download-secondary {
  font-size: 0.8rem;
  opacity: 0.9;
}

.other-versions {
  margin-top: 2rem;
}

.other-versions-title {
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  text-align: center;
}

.version-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.version-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 280px;
  height: 280px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.version-item:hover {
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.version-item.active {
  border: 2px solid var(--vp-c-brand);
}

.version-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.version-icon {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.version-info {
  width: 100%;
}

.version-name {
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.version-detail {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.version-footer {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.version-download-btn {
  width: 100%;
}

.version-coming-soon {
  display: flex;
  justify-content: center;
}

.version-icon {
  margin-right: 0;
  margin-bottom: 0.5rem;
}

.version-action {
  margin-top: 1rem;
}
</style>