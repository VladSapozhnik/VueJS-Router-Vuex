<template>
  <div class="contacts container">
    <h1>This is an contacts page</h1>
    <div @click="GET_ALBUM_API(10)" class="contacts__btn">Показать посты</div>
    <div class="contacts__quantity">Постов на странице: {{ALBUM_LENGTH}}</div>
    <div>
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
