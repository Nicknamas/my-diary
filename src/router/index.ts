import { routes as feedRoutes } from '@/domains/feed/router/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { name: 'FeedView' },
      name: 'Root',
      component: () => import('@core/root'),
      children: [
        ...feedRoutes,
      ]
    }
  ],
})

export default router
