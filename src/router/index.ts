import { routes as feedRoutes } from '@/domains/feed/router/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@core/layouts/main-layout'),
      children: [
        ...feedRoutes,
      ]
    },
    {
      path: '/',
      component: () => import('@core/layouts/bare-layout'),
      children: []
    }
  ],
})

export default router
