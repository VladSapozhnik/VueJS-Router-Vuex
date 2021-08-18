<template>
  <div class="contacts container">
    <h1>Contacts page</h1>
    <div class="contacts__title">Название: {{item.title}}</div>
    <div><img class="contacts__img" :src="item.url" alt=""></div>
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
      'GET_ALBUM_API'
    ])
  },
  computed: {
    ...mapGetters([
      'ALBUM'
    ])
  },
  created () {
    const item = this.ALBUM.find(item => item.id === this.$route.params.id)
    if (item) {
      this.item = item
    }
  }
}
</script>
<style scoped lang="scss">
  .contacts {
    h1 {
      font-size: 34px;
    }
    &__title {
      margin-bottom: 20px;
    }
    &__img {
      width: 300px;
      height: 300px;
    }
    &__quantity {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
</style>
