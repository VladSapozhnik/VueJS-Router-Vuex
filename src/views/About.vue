<template>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
      <div class="about__btn" @click="showPosts = !showPosts">Получить данные!</div>
      <div class="about__quantity">Опубликовано постов:
        <span v-if="showPosts == false">0</span>
        <span v-if="showPosts == true">{{POSTS_LENGTH}}</span>
      </div>
      <div class="about__wrapper" v-if="showPosts == true">
        <div class="about__item" v-for="item in POSTS" :key="item.id">
          <div class="about__item-title">{{item.title}}</div>
          <div>{{item.body}}</div>
        </div>
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
      text: 1,
      showPosts: false
    }
  },
  methods: {
    ...mapActions([
      'GET_POSTS_API'
    ])
  },
  computed: {
    ...mapGetters([
      'POSTS',
      'POSTS_LENGTH'
    ])
  },
  async mounted () {
    this.GET_POSTS_API(15) // (количество постов)
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: green;
  }
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
  .about {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__quantity {
      font-size: 20px;
      font-weight: bold;
    }
    &__btn {
      display: inline-block;
      padding: 10px 10px;
      text-align: center;
      border: 1px solid #000;
      border-radius: 5px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    &__item {
      text-align: left;
      width: 25%;
      margin: 8px;
      border: 1px solid #000;
      padding: 10px;
      &-title {
        margin-bottom: 10px;
        font-size: 23px;
        font-weight: bold;
      }
    }
  }
</style>
