import axios from 'axios'

export default {
  state: {
    Posts: []
  },
  mutations: {
    SET_POSTS_TO_MUTATIONS: (state, Posts) => {
      state.Posts = Posts
    }
  },
  actions: {
    async GET_POSTS_API ({ commit }, limit) { // переменная для количества постов
      const response = await axios('https://jsonplaceholder.typicode.com/posts?_limit=' + limit, {})
      commit('SET_POSTS_TO_MUTATIONS', response.data)
    }
  },
  modules: {
  },
  getters: {
    POSTS (state) {
      return state.Posts
    },
    POSTS_LENGTH (state) {
      return state.Posts.length
    }
  }
}
