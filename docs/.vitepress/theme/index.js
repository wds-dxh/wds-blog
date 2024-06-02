// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
import MyLayout from "./layout/Index.vue";

export default {
    extends: DefaultTheme,    //继承默认主题
    Layout: MyLayout,

    enhanceApp({ app, router, siteData, isServer }) {  
      if (!isServer) {  
        // 客户端注入 meta 标签  
        app.mount('#app').$nextTick(() => {  
          const meta = document.createElement('meta');  
          meta.name = 'msvalidate.01';  
          meta.content = '5DD22862BBCB585FF26B1F2FB033DEA0'; // 你的验证码  
          document.head.appendChild(meta);  
        });  
      }  
    }  
    
  }