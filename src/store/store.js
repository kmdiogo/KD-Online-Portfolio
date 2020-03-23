import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pageTabHistory: {},
        isTerminalOpen: false,
        isToolFocused: false
    },
    mutations: {
        addTabToHistory(state, value) {
            if (!state.pageTabHistory[value.name]) {
                state.pageTabHistory = {
                    ...state.pageTabHistory,
                    [value.name]: {...value}
                }
            }
        },
        removeTabFromHistory(state, tabName) {
            if (state.pageTabHistory[tabName]) {
                let keys = Object.keys(state.pageTabHistory);
                if (keys.length > 1) {
                    let isDeletingCurrentTab;
                    if (state.pageTabHistory[tabName].name === router.currentRoute.name)
                        isDeletingCurrentTab = true;

                    Vue.delete(state.pageTabHistory, tabName);

                    if (isDeletingCurrentTab) {
                        let keys = Object.keys(state.pageTabHistory);
                        let newTo = state.pageTabHistory[keys[keys.length-1]].path;
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
