import type { RouterOptions } from "vue-router";

export const routes: RouterOptions['routes'] = [
  {
    path: 'feed',
    name: 'FeedView',
    component: () => import('@feed/index')
  }
]
