/*
 * @Author: wds-mac wdsnpshy@163.com
 * @Date: 2025-07-26 19:12:09
 * @Description: 
 * Copyright (c) 2025 by ${wds-mac}, All Rights Reserved. 
 */
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import Layout from './Layout.vue'
import BackToTop from './components/BackToTop.vue'
import LoadingBar from './components/LoadingBar.vue'
import { enhanceOutline } from './outline-enhancer.ts'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,        // 使用自定义布局
  enhanceApp({ app, router }) {
    app.use(ElementPlus)
    // 注册自定义全局组件
    app.component('BackToTop', BackToTop)
    app.component('LoadingBar', LoadingBar)
    
    // 初始化目录层级增强器
    if (typeof window !== 'undefined') {
      enhanceOutline()
    }
  }
}