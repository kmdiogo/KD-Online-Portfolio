import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome'
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import Commands from './views/Commands'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      label: 'home',
      component: Welcome
    },
    {
      path: '/AboutMe',
      component: AboutMe
    },
    {
      path: '/Skills',
      component: Skills
    },
    {
      path: '/Commands',
      component: Commands
    }
  ]
})
