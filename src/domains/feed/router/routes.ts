import type { RouterOptions } from "vue-router";

export const routes: RouterOptions['routes'] = [
  {
    path: 'feed',
    name: 'FeedPage',
    component: () => import('@/pages/FeedPage.vue')
  }
]
