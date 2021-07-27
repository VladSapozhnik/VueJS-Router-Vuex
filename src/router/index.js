import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
  },
  {
    path: '/news',
    name: 'news',
    meta: { title: 'News' },
    component: () => import(/* webpackChunkName: "news" */ '../views/News/News.vue')
  },
  {
    path: '/news/:id',
    meta: { title: 'News-Post' },
    component: () => import(/* webpackChunkName: "news" */ '../views/News/NewsPost.vue')
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
