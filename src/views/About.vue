<template>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
      <div class="about__btn" @click="GET_POSTS_API(15)">Получить данные!</div>
      <div class="about__quantity">Опубликовано постов:
        {{POSTS_LENGTH}}
      </div>
      <div class="about__wrapper">
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
