// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
import MyLayout from "./layout/ Index.vue";

export default {
    extends: DefaultTheme,    //继承默认主题
    Layout: MyLayout,

  }