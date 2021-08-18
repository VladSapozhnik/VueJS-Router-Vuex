export default [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Home.vue')
  }

]
