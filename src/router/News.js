export default [
  {
    path: '/news',
    name: 'news',
    meta: { title: 'News' },
    component: () => import(/* webpackChunkName: "news" */ '../views/News/News.vue')
  },
  {
    path: '/news/:id',
    component: () => import(/* webpackChunkName: "news" */ '../views/News/NewsPost.vue'),
    children: [
      {
        path: '/news/1',
        meta: { title: 'item-1' }
      },
      {
        path: '/news/2',
        meta: { title: 'item-2' }
      },
      {
        path: '/news/3',
        meta: { title: 'item-3' }
      },
      {
        path: '/news/4',
        meta: { title: 'item-4' }
      },
      {
        path: '/news/5',
        meta: { title: 'item-5' }
      },
      {
        path: '/news/6',
        meta: { title: 'item-6' }
      },
      {
        path: '/news/7',
        meta: { title: 'item-7' }
      },
      {
        path: '/news/8',
        meta: { title: 'item-8' }
      },
      {
        path: '/news/9',
        meta: { title: 'item-9' }
      },
      {
        path: '/news/10',
        meta: { title: 'item-10' }
      }
    ]
  }
]
