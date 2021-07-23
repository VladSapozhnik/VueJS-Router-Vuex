<template>
  <div class="contacts container">
    <h1>This is an contacts page</h1>
    <div @click="showPosts = !showPosts" class="contacts__btn"><span v-if="showPosts == false">Показать посты</span><span v-if="showPosts == true">Скрыть посты</span></div>
    <div class="contacts__quantity">Постов на странице: <span v-if="showPosts == false">0</span><span v-if="showPosts == true">{{ALBUM_LENGTH}}</span></div>
    <div v-if="showPosts == true">
        <div class="contacts__item" v-for="item in ALBUM" :key="item.id">
          <img class="contacts__item-avatar" :src="item.thumbnailUrl" alt="avatar">
        <div class="contacts__item-title">{{item.title}}</div>
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
      showPosts: false
    }
  },
  methods: {
    ...mapActions([
      'GET_ALBUM_API'
    ])
  },
  computed: {
    ...mapGetters([
      'ALBUM',
      'ALBUM_LENGTH'
    ])
  },
  mounted () {
    this.GET_ALBUM_API(10)
  }
}
</script>
<style scoped lang="scss">
  .contacts {
    h1 {
      font-size: 34px;
    }
    &__quantity {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
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
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & + & {
        margin-top: 20px;
      }
      &-title {
        margin-left: 40px;
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
</style>
