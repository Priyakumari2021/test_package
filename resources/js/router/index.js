import { createRouter, createWebHistory } from "vue-router";

import homePage from '../components/pages/home/index.vue'
import AboutPage from '../components/pages/home/about.vue'

const routes = [
     {
          path: '/pages/about',
          component: AboutPage
     },
     {
          path: '/',
          component: homePage
     }
]

const router = createRouter({
     history: createWebHistory(),
     routes,
})

export default router