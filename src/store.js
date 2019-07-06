import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHiddenFooterbar: true
  },
  mutations: {
    toggleFooterbar: function (state, data) {
      state.isHiddenFooterbar = data;
    }
  },
  actions: {

  }
})
