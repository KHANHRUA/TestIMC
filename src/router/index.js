import { createRouter, createWebHistory } from 'vue-router'
import StartedScreen from '../views/StartedScreen/StartedScreen.vue'
import HomeScreen from '../views/HomeScreen/HomeScreen.vue'
import HelpScreen from '../views/HelpScreen/HelpScreen.vue'
import CommunityScreen from '../views/CommunityScreen/CommunityScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homescreen',
      component: HomeScreen,
    },
    {
      path: '/getting-started',
      name: 'startedscreen',
      component: StartedScreen
    },
    {
      path: '/help',
      name: 'helpcreen',
      component: HelpScreen
    },
    ,
    {
      path: '/community',
      name: 'communitycreen',
      component: CommunityScreen
    }
  ]
})

export default router
