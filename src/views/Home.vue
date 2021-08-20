<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    func: function () {
      const test = function () {
        console.log(this)
      }
      const test2 = () => {
        console.log(this)
      }
      test()
      test2()
    }
  },
  created: function () {
    this.func()
  }
}
</script>
