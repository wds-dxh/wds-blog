import { defineConfig } from 'vitepress'
// import sidebar from './sidebar.mjs' //导入侧边栏配置
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,  //忽略死链接
  title: "邬东升的博客",        //标题
  description: "邬东升的博客",  //描述
  logo: '/logo.svg',
  lang: 'zh-CN',  //语言
  lastUpdated: true,  //最后更新时间
  head: [  //头部
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({   //自动生成侧边栏
        deletePrefix: '.',    //删除前缀
        collapsed: true,      //折叠
        path: 'docs',          //路径
        titleFromFile: false, // 使用文件名作为标题
        sort: true // 排序
      })
    ]
  },

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '邬东升的博客',
    logo: '/logo.svg', // 设置网站标题的 logo
    
    // 右侧目录配置
    outline: {
      level: [1, 6], // 显示H1到H6的所有标题
      label: 'On this page'
    },
    
    search: {   //搜索
      provider: 'local'
      },

    nav: [    //导航栏
      { text: '首页', link: '/' },

      { text: '星空板', items:[
      {text:"星空板", link:"/星空板",},
      {text:"学习指南", link:"/星空板/学习指南",},
      ]
      },

      { text: '文档', items:[
      {text:"yolov8训练与部署", link:"/文档/yolov8训练与部署/",},
      {text:"docker", link:"/文档/docker/",},
      ]
      },

      { text: 'code', items:[
      {text:"c++", link:"/code/c++/",},  
      {text:"python", link:"/code/python/",},
      ]
      },

      { text: '稀奇古怪', link: '/稀奇古怪/' },

      { text: '关于我', link: '/关于我/' }
    ],

    // sidebar: sidebar, //侧边栏

    socialLinks: [  //社交链接
      { icon: 'github', link: 'https://github.com/wds-dxh' }
    ],


    footer: {     //页脚
      message: "邬东升的博客",
      copyright: 
        '2024.06.02 @wds'
    }
  }
})
