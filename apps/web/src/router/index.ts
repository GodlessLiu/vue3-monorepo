import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home.vue'),
        },
      ],
    },
  ],
})

export default router
