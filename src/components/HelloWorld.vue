<template>
  <div class="hello">
    <h1>{{ msg }}{{text}}</h1>
    <div>{{count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      text: '1'
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment: function () {
      store.commit('increment')
    },
    decrement: function () {
      store.commit('decrement')
    }
  }
}
</script>

<style scoped lang="scss">
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
