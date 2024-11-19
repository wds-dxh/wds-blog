import { defineConfig } from 'vitepress'
// import sidebar from './sidebar.mjs' //导入侧边栏配置
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "邬东升的博客",        //标题
  description: "邬东升的博客",  //描述
  logo: '/logo.svg',
  lang: 'zh-CN',  //语言
  lastUpdated: true,  //最后更新时间

  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        deletePrefix: '.',    //删除前缀
        collapsed: true,      //折叠
        path: 'docs',          //路径
        deletePrefix: '', // 删除文件名中的 '01-' 前缀
        titleFromFile: true, // 从文件中读取标题


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
    logo: '/logo.svg',

    search: {   //搜索
      provider: 'local'
      },


    nav: [    //导航栏
      { text: '首页', link: '/' },

      { text: '星空板', items:[
      {text:"星空板", link:"/星空板",},
      {text:"学习指南", link:"/星空板/学习指南",},
      ]
    } ,

      {text: 'learn', items:[
      { text: 'ML&CV ', items:[
        {text: 'pytorch', link: '/ML&CV/pytorch/' },
        {text: 'Resnet', link: '/ML&CV/Resnet/' },
        {text: 'opencv', link: '/ML&CV/opencv/' },
        {text: 'CV合集', link: '/ML&CV/CV合集/' },
          ]
      },

      { text: '嵌入式', items:[
        {text: 'stm32', link: '/嵌入式/stm32/' },
        {text: 'linux', link: '/嵌入式/linux/' },
        {text: 'ROS', link: '/嵌入式/ROS/' },
        {text: 'esp32', link: '/嵌入式/esp32/' },
      ]
      },


      { text: 'software', items:[
        {text: 'inkscape', link: '/soft/inkscape/' },
        {text: 'blender', link: '/soft/blender/' },
      ]
      },
        ]} ,

        { text: 'code', items:[
          {text: 'python', link: '/code/python/' },
          {text: 'C++', link: '/code/C++/' },
          {text: 'go', link: '/code/go/' },
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
