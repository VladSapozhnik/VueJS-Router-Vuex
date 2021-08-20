import axios from 'axios'

export default {
  state: {
    Album: []
  },
  mutations: {
    SET_ALBUM_TO_MUTATIONS: (state, Album) => {
      state.Album = Album
    }
  },
  actions: {
    async GET_ALBUM_API ({ commit }, limit) {
      const response = await axios('https://jsonplaceholder.typicode.com/photos?_limit=' + limit, {})
      commit('SET_ALBUM_TO_MUTATIONS', response.data)
    }
  },
  modules: {
  },
  getters: {
    ALBUM (state) {
      return state.Album
    },
    ALBUM_LENGTH (state) {
      return state.Album.length
    }
  }
}
