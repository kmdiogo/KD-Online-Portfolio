import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome'
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import Commands from './views/Commands'
import Experience from './views/Experience'
import {WelcomeObj, ExperienceObj, CommandsObj, SkillsObj, AboutMeObj} from "./constants/PageObjects";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: WelcomeObj.to,
      component: Welcome
    },
    {
      path: AboutMeObj.to,
      component: AboutMe
    },
    {
      path: SkillsObj.to,
      component: Skills
    },
    {
      path: CommandsObj.to,
      component: Commands
    },
    {
      path: ExperienceObj.to,
      component: Experience
    }
  ]
})
