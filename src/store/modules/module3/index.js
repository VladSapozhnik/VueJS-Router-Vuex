import axios from 'axios'

export default {
  state: {
    Users: []
  },
  mutations: {
    SET_USERS_TO_MUTATIONS: (state, Users) => {
      state.Users = Users
    }
  },
  actions: {
    async GET_USERS_API ({ commit }, limit) {
      const response = await axios('https://jsonplaceholder.typicode.com/users?_limit=' + limit, {})
      commit('SET_USERS_TO_MUTATIONS', response.data)
    }
  },
  modules: {
  },
  getters: {
    USERS (state) {
      return state.Users
    },
    USERS_LENGTH (state) {
      return state.Users.length
    }
  }
}
