import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Pages URL
import About from './About'
import News from './News'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: 'Home' },
    component: Home,
    children: [
      {
        path: '/home/*',
        redirect: { name: 'Home' }
      }
    ]
  },
  {
    path: '/home/:id',
    name: 'pagesItem',
    meta: { title: 'Pages-Item' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Home-profile.vue')
  },
  ...About,
  ...News,
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { title: 'Contacts' },
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue'),
    children: [
      {
        path: '/contacts/*',
        redirect: { name: 'Home' }
      }
    ]
  },
  {
    path: '/contacts/:id',
    name: 'contactsPages',
    meta: { title: 'about-item' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Contacts-item.vue')
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
