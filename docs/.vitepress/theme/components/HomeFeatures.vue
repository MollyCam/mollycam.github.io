<template>
  <div class="home-features">
    <h2>核心优势</h2>
    <div class="features-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-card">
        <div class="icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.details }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    icon: '🔥',
    title: '高效录制',
    details: '一键启动录制，自动保存，无需复杂操作'
  },
  {
    icon: '⚡',
    title: '快速检索',
    details: '智能标签系统，秒级定位历史记录'
  },
  {
    icon: '🔒',
    title: '数据安全',
    details: '本地加密存储，保障数据隐私'
  }
]
</script>

<style scoped>
.home-features {
  padding: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 1rem;
}
</style>