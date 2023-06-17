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
          components: {
            default: () => import('../views/ListView.vue'),
            detail: () => import('../views/DetailView2.vue')
          },
          props: { default: false, detail: true }
        },
        {
          path: '/detail-drawer/:id',
          name: 'detail-drawer-item',
          components: {
            default: () => import('../views/ListView.vue'),
            detail: () => import('../views/DetailView2.vue')
          },
          props: { default: false, detail: true }
        },
        {
          path: '/list-detail',
          name: 'list-detail',
          component: () => import('../views/ListDetailView1.vue'),
          children: [
            {
              path: '/list-detail-item/:id',
              name: 'list-detail-item',
              component: () => import('../views/DetailView1.vue'),
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
