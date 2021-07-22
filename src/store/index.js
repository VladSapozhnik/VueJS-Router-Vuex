import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    Posts: []
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    SET_POSTS_TO_VUEX: (state, Posts) => {
      state.Posts = Posts
    }
  },
  actions: {
    GET_POSTS_API ({ commit, limit = 15 }) {
      return axios('https://jsonplaceholder.typicode.com/posts?_limit=' + limit, {
      })
        .then(function (response) {
          commit('SET_POSTS_TO_VUEX', response.data) // commit(1 - мутация которою хотим вызвать. 2 - данные которые хотим положить)
        })
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
})
