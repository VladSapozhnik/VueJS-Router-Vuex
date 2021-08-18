export default [
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
    children: [
      {
        path: '*/*',
        redirect: { name: 'About' }
      }
    ]
  },
  {
    path: '/about/:id',
    name: 'aboutPage',
    meta: { title: 'about-item' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/AboutItem.vue')
  }
]
