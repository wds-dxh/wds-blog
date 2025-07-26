<template>
  <div class="loading-bar" :class="{ active: isLoading }">
    <div class="loading-bar-progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'

const isLoading = ref(false)
const progress = ref(0)
const router = useRouter()

let progressTimer = null

const startLoading = () => {
  isLoading.value = true
  progress.value = 0
  
  progressTimer = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 10
    }
  }, 100)
}

const finishLoading = () => {
  progress.value = 100
  
  setTimeout(() => {
    isLoading.value = false
    progress.value = 0
    if (progressTimer) {
      clearInterval(progressTimer)
      progressTimer = null
    }
  }, 200)
}

onMounted(() => {
  // 监听路由变化
  router.onBeforeRouteChange = startLoading
  router.onAfterRouteChanged = finishLoading
})
</script>

<style scoped>
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.loading-bar.active {
  opacity: 1;
}

.loading-bar-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transition: width 0.2s ease;
  box-shadow: 0 0 10px var(--vp-c-brand-1);
}
</style>