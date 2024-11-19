import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,        //继承默认主题
    
    enhanceApp({ app }) {   //增强应用
        app.component('MyGlobalComponent', {})
    }
    }