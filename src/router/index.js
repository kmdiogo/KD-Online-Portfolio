import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import { routeComponents, routes } from "./routes";

Vue.use(Router);
const router = new Router({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: routes.map((route, i) => {
        return {
            ...route,
            component: routeComponents[i]
        }
    })
});

router.afterEach((to, from) => {
    store.commit('addTabToHistory', to);
});

export default router
