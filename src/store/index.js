import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
  },
  mutations: {
    // 保存用户信息
    USER_INFO(state, info) {
      state.user = info
    },
  },
  actions: {
    saveUserInfo({ commit }, data) {
      commit('USER_INFO', data)
    },
  },
  modules: {},
})
