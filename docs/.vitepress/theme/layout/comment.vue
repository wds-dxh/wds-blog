//theme/Layout/comment
<template>
    <div class="content-container"></div>
</template>

<script setup lang="ts">
import { watch, nextTick, onMounted, ref } from 'vue'
import 'gitalk/dist/gitalk.css' //引入 gitalk 的 css 样式
import Gitalk from 'gitalk'
import { useRouter } from 'vitepress'
import { inBrowser } from 'vitepress'

let { route } = useRouter() // 页面路由对象
const options = {
    id: route.data.title, // 可选，推荐设置为页面标题，因为会作为标签传给Github issues，且issues标签有长度限制。
    newIssueTitle: '页面评论', // GitHub issue 的标题
    owner: 'wds-dxh', // GitHub repository 所有者
    repo: 'wds-blog', // GitHub repository
    clientID: 'Ov23liQh8kd2LiZHnBm2', // 自己的clientID
    clientSecret: '842d35021a34bf538b752dd152a278a9cd202d42', // 自己的clientSecret
    admin: ['wds-dxh'], // GitHub repository 所有者
    labels: ['Gitalk'], // GitHub issue 的标签
    language: 'zh-CN', // GitHub issue 的语言
    createIssueManually: false //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
}
const init = () => {
    //如果在浏览器环境
    //如果在浏览器环境
    if (inBrowser) {
        watch(
            () => route.path, // 监听路由变化，重新挂载评论组件
            () => {
                nextTick(() => {
                    if (typeof window !== undefined) {
                        const containerElement =
                            document.querySelector('.content-container')
                        if (containerElement) {
                            const contentElement = document.getElementById(
                                'gitalk-page-container'
                            )
                            if (contentElement) {
                                //判断是否已有评论组件节点，有则删除，重新创建。
                                contentElement.removeChild(containerElement)
                            }
                            const wrap = document.createElement('div')
                            wrap.setAttribute('id', 'gitalk-page-container')
                            const comment = document.querySelector(
                                '.content-container'
                            ) as HTMLElement
                            comment.appendChild(wrap) // 把组件加入到想加载的地方
                        }
                        const gitTalk = new Gitalk(options)
                        gitTalk.render('gitalk-page-container')
                    }
                })
            },
            { immediate: true }
        )
    }
}
onMounted(() => {
    init()
})
</script>



git add .
git commit -m "评论"
git push