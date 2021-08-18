export default [
  {
    path: '/profile',
    name: 'news',
    meta: { title: 'Profile' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Profile/Profile.vue'),
    children: [
      {
        path: '/profile/*',
        redirect: { name: 'news' }
      }
    ]
  },
  {
    path: '/profile/:id',
    name: 'Profile-Item',
    meta: { title: 'Pages-Item' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Profile/Profile-item.vue')
  }
]
