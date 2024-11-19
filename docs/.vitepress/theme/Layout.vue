<template>
  <div>
    <header>
      <h1>邬东升的博客</h1>
    </header>
    <main>
      <div v-if="page.isNotFound">
        Custom 404 page!
      </div>
      <div v-else-if="frontmatter.layout === 'home'">
        Custom home page!
      </div>
      <Content v-else />
    </main>
    <footer>
      <p>© 2023 邬东升的博客</p>
    </footer>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<style>
header {
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
}

footer {
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}

main {
  padding: 2rem;
}
</style>