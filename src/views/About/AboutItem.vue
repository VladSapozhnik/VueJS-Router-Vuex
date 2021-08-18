<template>
  <div class="about-item container">
    <div class="container">
      <div class="about-item__wrapper">
          <div class="about-item__wrapper-title">{{item.title}}</div>
          <div class="about-item__wrapper-text">{{item.body}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      item: null
    }
  },
  methods: {
    ...mapActions([
      'GET_POSTS_API'
    ])
  },
  computed: {
    ...mapGetters([
      'POSTS'
    ])
  },
  created () {
    const item = this.POSTS.find(item => item.id === this.$route.params.id)
    if (item) {
      this.item = item
    }
  }
}
</script>

<style scoped lang="scss">
.about-item {
  padding: 50px 0;
  border: 1px solid #000;
  &__wrapper {
    &-title {
      font-size: 25px;
      font-weight: 900;
      color: #42b983;
      margin-bottom: 40px;
    }
    &-text {
      font-size: 19px;
      font-weight: 600;
    }
  }
}
</style>
