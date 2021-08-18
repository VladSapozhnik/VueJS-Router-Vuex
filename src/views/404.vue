<template>
  <div class="not-found">
    <h1 class="not-found-title">Страница не найдена, ошибка 404!</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
  .not-found {
    &-title {
      font-size: 25px;
      font-weight: 900;
      color: #18681c;
    }
  }
</style>
