import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTabHistory: {},
    isTerminalOpen: false
  },
  mutations: {
    addTabToHistory(state, value) {
      if (!state.pageTabHistory[value.label]) {
        Vue.set(state.pageTabHistory, value.label, {
          fileName: value.fileName,
          to: value.to,
          icon: value.icon,
          iconColor: value.iconColor
        })
      }
    },
    removeTabFromHistory(state, tabName) {
      if (state.pageTabHistory[tabName]) {
        let keys = Object.keys(state.pageTabHistory);
        if (keys.length > 1) {
          let isDeletingCurrentTab;
          if (state.pageTabHistory[tabName].to === router.currentRoute.path)
            isDeletingCurrentTab = true;

          Vue.delete(state.pageTabHistory, tabName);

          if (isDeletingCurrentTab) {
            let keys = Object.keys(state.pageTabHistory);
            let newTo = state.pageTabHistory[keys[keys.length-1]].to;
            router.push(newTo);
          }
        }

      }
    },
    toggleIsTerminalOpen(state) {
      state.isTerminalOpen = !state.isTerminalOpen;
    }
  },
  actions: {

  }
})
