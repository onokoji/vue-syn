import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue')
  },
  {
    path: '/fade',
    name: 'Fade',
    component: () => import(/* webpackChunkName: "test" */ '../views/Fade.vue')
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import(/* webpackChunkName: "test" */ '../views/Scroll.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
