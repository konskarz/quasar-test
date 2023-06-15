import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/MainLayout1.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/ListDetailView2.vue'),
          children: [
            {
              path: ':id',
              name: 'comment',
              component: () => import('../views/DetailView.vue'),
              props: true
            }
          ]
        },
        {
          path: '/feed-row',
          name: 'feed-row',
          component: () => import('../views/FeedRowView.vue')
        },
        {
          path: '/feed-column',
          name: 'feed-column',
          component: () => import('../views/FeedColumnView.vue')
        }
      ]
    }
  ]
})

export default router
