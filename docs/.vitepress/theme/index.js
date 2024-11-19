import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import './custom.css'

export default {
  ...DefaultTheme,
//   Layout,        //关闭默认布局
  enhanceApp({ app }) {
    app.use(ElementPlus)
    // 注册自定义全局组件
    // app.component('MyGlobalComponent', MyGlobalComponent)
  }
}