<template>
  <div class="users">
    <h1>{{text}}</h1>
    <div class="users__btn" @click="GET_USERS_API(10)">Показать профили</div>
    <div class="users__quantity">USERS: {{USERS_LENGTH}}</div>
    <div class="users__wrapper">
      <div class="users__item" v-for="user in USERS" :key="user.id">
        <div class="users__item-name users__item-row">Name: {{user.name}}</div>
        <div class="users__item-phone users__item-row">Tel: {{user.phone}}</div>
        <div class="users__item-email users__item-row">Email: {{user.email}}</div>
        <a :href="user.website" class="users__item-website users__item-row"> {{user.website}}</a>
        <div class="users__item-city users__item-row">City: {{user.address.city}}</div>
        <div class="users__item-street users__item-row">Street: {{user.address.street}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      text: 'Home'
    }
  },
  computed: {
    ...mapGetters([
      'USERS',
      'USERS_LENGTH'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS_API'
    ])
  }
}
</script>
<style lang="scss">
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
<style scoped lang="scss">
.users {
  &__quantity {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
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
    width: calc(25% - 30px);
    margin: 0 15px 15px;
    border: 1px solid #000;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 30px 15px;
    text-align: left;
    &-name {
      font-weight: 700;
    }
    &-website {
      display: block;
    }
    &-row {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
