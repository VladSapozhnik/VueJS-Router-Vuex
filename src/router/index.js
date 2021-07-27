import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from './About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: Home
  },
  ...About,
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

export default router
