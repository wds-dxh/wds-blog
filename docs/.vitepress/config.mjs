import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "邬东升的博客",
  description: "wds's blog",    //做SEO优化
  // base: '/wds-blog/',
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true
  },
  themeConfig: {    //这个是主题配置
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '邬东升的博客',
    logo: '/logo.svg',
    search: {
    provider: 'local'
    },
    nav: [    //导航栏
      { text: '首页', link: '/' },
      { text: '星空板', link: '/星空板/' },
      { text: '机器学习', link: '/机器学习/' },
      { 
        text: '图像处理', items:[
        {text: 'opencv', link: '/图像处理/opencv/' },
        {text: 'halcon', link: '/图像处理/halcon/' },
          ]
       },
      { text: '嵌入式', link: '/嵌入式/' },
      { text: '我的作品', link: '/我的作品/' },
      { text: '课程设计', link: '/课程设计/' },
      { text: '关于我', link: '/关于我/' }
    ],

    sidebar: {  //侧边栏
          '/图像处理/opencv/': {
        text: 'opencv',
        items: [
          { text: 'opencv简介', link: '/图像处理/opencv/opencv简介' },
          { text: '1.读取一张图片', link: '/图像处理/opencv/1.读取一张图片' }
        ]
      },
      '/图像处理/halcon/': {
        text: 'halcon',
        items: [
          { text: 'halcon简介', link: '/图像处理/opencv/opencv简介' },
          { text: '1.读取一张图片', link: '/图像处理/opencv/1.读取一张图片' }
        ]
      }
    },

    socialLinks: [    //社交链接
      { icon: 'github', link: 'https://github.com/wds-dxh' }
    ],
    footer: {
      message: "邬东升的博客",
      copyright: 
        '2024.06.02 @wds'
    }
  }
})
