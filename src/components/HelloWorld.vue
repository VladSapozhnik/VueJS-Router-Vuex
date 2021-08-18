<template>
  <div class="users">
    <h1>{{text}}</h1>
    <div>Welcome</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      text: 'Home'
    }
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
    cursor: pointer;
    &-name {
      font-weight: 700;
    }
    &-website {
      display: block;
      color: rgb(14, 141, 14);
      text-decoration: underline;
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
