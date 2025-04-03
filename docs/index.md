---
layout: home

hero:
  # name: "邬东升的博客"
  text: "随笔、技术、生活"
  tagline: 心中自有一杆秤，何须他人来妄谈！
  image: 
    src: /logo.svg
    alt: VitePress Logo 
  actions:
    - theme: brand
      text: 关于我
      link: /关于我/
    - theme: alt
      text: 联系我
      link: https://github.com/wds-dxh

features:
  # - title: 🤝  友情链接
  #   details: 一些友情链接
  #   link: "/team"
    
  # - title: 👓 星空AIoT开发板
  #   details: 星空AIoT开发板的学习指南
  #   link: "./星空板/学习指南"

  - title: 🪖 yolov8训练与部署
    details: yolov8训练与部署使用的文档
    link: "./文档/yolov8训练与部署"

  - title: 🪖 下载
    details: 一些下载链接
    link: " ./download/"

---


<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>






# 哈哈哈哈

<!-- ## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button> -->

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>