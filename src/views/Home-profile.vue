<template>
  <div class="user container">
    <div class="user__title">User</div>
    <div class="user__subtitle">User:</div>
    <ul class="user__item">
      <li><span>Name:</span> {{user.name}}</li>
      <li><span>Username:</span> {{user.username}}</li>
      <li><span>Email:</span> {{user.email}}</li>
      <li><span>Phone:</span> {{user.phone}}</li>
      <li><span>Website:</span> {{user.website}}</li>
    </ul>
    <div class="user__subtitle">Address:</div>
    <ul class="user__item">
      <li><span>City:</span> {{user.address.city}}</li>
      <li><span>Street:</span> {{user.address.street}}</li>
      <li><span>Suite:</span> {{user.address.suite}}</li>
      <li><span>Zipcode:</span> {{user.address.zipcode}}</li>
    </ul>
    <div class="user__subtitle">Company:</div>
    <ul class="user__item">
      <li><span>Company bs:</span> {{user.company.bs}}</li>
      <li><span>Company catchPhrase:</span> {{user.company.catchPhrase}}</li>
      <li><span>Company name:</span> {{user.company.name}}</li>
    </ul>
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
      user: null
    }
  },
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS_API'
    ])
  },
  created () {
    const user = this.USERS.find(user => user.id === this.$route.params.id)
    if (user) {
      this.user = user
    }
  }
}
</script>
<style scoped lang="scss">
  .user {
    text-align: left;
    &__title {
      text-align: center;
      font-size: 48px;
      margin-bottom: 25px;
      font-weight: 600;
    }
    &__subtitle {
      margin-bottom: 10px;
      color: #42b983;
      font-weight: 700;
      font-size: 28px;
    }
    &__item {
      margin-bottom: 20px;
      padding-left: 0;
      li {
        list-style-type: none;
        span {
          font-weight: 600;
        }
      }
      li + li {
        margin-top: 10px;
      }
    }
  }
</style>
