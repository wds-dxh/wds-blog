import { defineConfig } from 'vitepress'
// 可以使用版本
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "邬东升的博客",
  description: "wds's blog",    //做SEO优化
  logo: '/logo.svg',
  // base: '/wds-blog/',    如果是部署到github pages，需要设置base为仓库名
  lastUpdated: true,  //最后更新时间

  Headers: [    //头部
    <meta name="msvalidate.01" content="5DD22862BBCB585FF26B1F2FB033DEA0" />
  ],

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
  themeConfig: {    //这个是主题配置
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '邬东升的博客',
    logo: '/logo.svg',
    search: {
    provider: 'local'
    },
    nav: [    //导航栏
      { text: '首页', link: '/' },

      { text: '星空板', items:[
      {text:"学习指南", link:"/星空板/学习指南/",},
      {text:"星空板", link:"/星空板/星空板/",},
      ]
    } ,

      { text: '我的作品', items:[
      {text:"基于关键点检测和深度学习的坐姿识别台灯", link:"/我的作品/基于关键点检测和深度学习的坐姿识别台灯/"},
      {text:'pyqt6+yolov8', link:'/我的作品/pyqt6+yolov8/'},
      {text:'uwb移动警示牌', link:'/我的作品/uwb移动警示牌/'},
      {text:'基于yolov8的传送带垃圾分类', link:'/我的作品/基于yolov8的传送带垃圾分类/'},
      ]
        },


      {text: 'learn', items:[
      { text: 'ML&CV ', items:[
        {text: 'pytorch', link: '/learn/ML&CV/pytorch/' },
        {text: 'Resnet', link: '/learn/ML&CV/Resnet/' },
        {text: 'opencv', link: '/learn/ML&CV/opencv/' },
        {text: 'CV合集', link: '/learn/ML&CV/CV合集/' },
          ]
      },

      { text: '嵌入式', items:[
        {text: 'stm32', link: '/learn/嵌入式/stm32/' },
        {text: 'linux', link: '/learn/嵌入式/linux/' },
        {text: 'ROS', link: '/learn/嵌入式/ROS/' },
        {text: 'esp32', link: '/learn/嵌入式/esp32/' },
      ]
      },

      { text: 'code', items:[
        {text: 'python', link: '/learn/code/python/' },
        {text: 'C++', link: '/learn/code/C++/' },
        {text: 'go', link: '/learn/code/go/' },
      ]
      },

      { text: 'soft', items:[
        {text: 'inkscape', link: '/learn/soft/inkscape/' },
        {text: 'blender', link: '/learn/soft/blender/' },
      ]
      },
        ]} ,

      { text: '稀奇古怪', link: '/稀奇古怪/' },

      { text: '关于我', link: '/关于我/' }
    ],

    sidebar: {  //侧边栏
    },

    socialLinks: [    //社交链接
      { icon: 'github', link: 'https://github.com/wds-dxh' },
      //使用svg显示gitee图标
      {icon : 'gitee', link: 'https://gitee.com/wds-dxh'},  
    ],

    footer: {
      message: "邬东升的博客",
      copyright: 
        '2024.06.02 @wds'
    }
  }
})
