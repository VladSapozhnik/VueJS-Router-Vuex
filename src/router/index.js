import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages URL
import About from './About'
import News from './Profile'
import Contacts from './Contacts'

Vue.use(VueRouter)

const routes = [
  ...Contacts,
  ...About,
  ...News,
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Home.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    meta: { title: 'Not Found 404' },
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/404.vue')
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
