<template>
  <div class="custom-layout">
    <!-- 加载进度条 -->
    <LoadingBar />
    
    <!-- 使用默认主题布局 -->
    <DefaultTheme.Layout>
      <!-- 在默认布局基础上添加自定义组件 -->
      <template #layout-bottom>
        <!-- 返回顶部按钮 -->
        <BackToTop />
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import BackToTop from './components/BackToTop.vue'
import LoadingBar from './components/LoadingBar.vue'

const { page, frontmatter } = useData()
</script>

<style scoped>
.custom-layout {
  min-height: 100vh;
}
</style>