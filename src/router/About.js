export default [
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/about/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/AboutItem.vue'),
    children: [
      {
        path: '/about/1',
        meta: { title: 'about-more' }
      },
      {
        path: '/about/2',
        meta: { title: 'about-items' }
      },
      {
        path: '/about/3',
        meta: { title: 'about-prod' }
      }
    ]
  }
]
