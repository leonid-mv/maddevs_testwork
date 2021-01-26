import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data
  },
  getters: {
    getPosts(state) {
      const posts = [...state.data]
      return posts.sort((a, b) => a.date < b.date ? 1 : -1)
    },
    getUsers(state) {
      const users = Array.from([...state.data], item => item.name)
      const usersWithoutDublicate = users.filter((value, index, self) => {
         return self.indexOf(value.trim()) === index
      })
      return usersWithoutDublicate
    }
  },
  mutations: {
    filterData(state, options) {
      state.data = state.data.filter(item => (!options.name || item.name === options.name))
    },
    resetFilter(state) {
      state.data = data
    }
  },
  actions: {
  },
  modules: {
  }
})