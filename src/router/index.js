import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/MainLayout4.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/ListDetailView2.vue'),
          children: [
            {
              path: ':id',
              name: 'comment',
              component: () => import('../views/DetailView1.vue'),
              props: true
            }
          ]
        },
        {
          path: '/detail-drawer',
          name: 'detail-drawer',
          components: {
            default: () => import('../views/ListView1.vue'),
            detail: () => import('../views/DetailView2.vue')
          }
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
