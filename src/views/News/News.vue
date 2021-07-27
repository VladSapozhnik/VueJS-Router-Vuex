<template>
  <div class="about">
    <h1>This is an news page</h1>
    <ul>
      <router-link tag="li" v-for="post in 10" :key="post.id" :to="`/news/${post}`">
        Post: {{post}}
      </router-link>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    color: green;
  }
  li {
    list-style-type: none;
  }
</style>
