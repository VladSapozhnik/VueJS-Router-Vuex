export default [
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { title: 'Contacts' },
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts/Contacts.vue'),
    children: [
      {
        path: '/contacts/*',
        redirect: { name: 'Contacts' }
      }
    ]
  },
  {
    path: '/contacts/:id',
    name: 'contactsPages',
    meta: { title: 'about-item' },
    component: () => import(/* webpackChunkName: "news" */ '../views/Contacts/Contacts-item.vue')
  }
]
