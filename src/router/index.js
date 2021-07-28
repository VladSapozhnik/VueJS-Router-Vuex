import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Pages URL
import About from './About'
import News from './News'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: Home
  },
  ...About,
  ...News,
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { title: 'Contacts' },
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
