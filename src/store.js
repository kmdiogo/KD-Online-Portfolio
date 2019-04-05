import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFileName: '',
    currentFileIcon: '',
    currentFileColor: '',
    pageTabHistory: {}
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
    },
    addTabToHistory(state, value) {
      if (!state.pageTabHistory[value.name]) {
        Vue.set(state.pageTabHistory, value.name, {
          fileName: value.fileName,
          to: value.to,
          icon: value.icon,
          iconColor: value.iconColor
        })
      }
    },
    removeTabFromHistory(state, tabName) {
      console.log(tabName);
      if (state.pageTabHistory[tabName]) {
        Vue.delete(state.pageTabHistory, tabName);
      }
    }
  },
  actions: {

  }
})
