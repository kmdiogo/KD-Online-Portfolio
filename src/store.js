import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFileName: '',
    currentFileIcon: '',
    currentFileColor: ''
  },
  mutations: {
    updateCurrentFileName(state, value) {
      state.currentFileName = value;
    },
    updateCurrentFileIcon(state, value) {
      state.currentFileIcon = value;
    },
    updateCurrentFileColor(state, value) {
      state.currentFileColor = value;
    }
  },
  actions: {

  }
})
