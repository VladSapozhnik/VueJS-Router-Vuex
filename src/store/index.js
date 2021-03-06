import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './modules/module1'
import module2 from './modules/module2'
import module3 from './modules/module3'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    module1,
    module2,
    module3
  }
})

/* import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Posts: [],
    Album: [],
    Users: []
  },
  mutations: {
    SET_POSTS_TO_MUTATIONS: (state, Posts) => {
      state.Posts = Posts
    },
    SET_ALBUM_TO_MUTATIONS: (state, Album) => {
      state.Album = Album
    },
    SET_USERS_TO_MUTATIONS: (state, Users) => {
      state.Users = Users
    }
  },
  actions: {
    async GET_POSTS_API ({ commit }, limit) { // переменная для количества постов
      const response = await axios('https://jsonplaceholder.typicode.com/posts?_limit=' + limit, {})
      commit('SET_POSTS_TO_MUTATIONS', response.data)
    },
    async GET_ALBUM_API ({ commit }, limit) {
      const response = await axios('https://jsonplaceholder.typicode.com/photos?_limit=' + limit, {})
      commit('SET_ALBUM_TO_MUTATIONS', response.data)
    },
    async GET_USERS_API ({ commit }, limit) {
      const response = await axios('https://jsonplaceholder.typicode.com/users?_limit=' + limit, {})
      commit('SET_USERS_TO_MUTATIONS', response.data)
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
    },
    ALBUM (state) {
      return state.Album
    },
    ALBUM_LENGTH (state) {
      return state.Album.length
    },
    USERS (state) {
      return state.Users
    },
    USERS_LENGTH (state) {
      return state.Users.length
    }
  }
}) */
