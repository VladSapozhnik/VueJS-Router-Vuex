import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/about/:id',
    meta: { title: 'About-item' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/AboutItem.vue')
  },
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
