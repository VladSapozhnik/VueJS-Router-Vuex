<template>
  <div class="about">
    <div class="container">
      <h1>This news page Post: {{id}}</h1>
      <router-link :to="{name: 'news'}">
        Новости
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-one',
  props: {
    msg: String
  },
  data: function () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route (toRoute) {
      this.id = toRoute.params.id
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: green;
  }
  li {
    list-style-type: none;
  }
</style>
