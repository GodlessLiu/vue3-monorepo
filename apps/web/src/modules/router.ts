import type { UserModule } from '@/types'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
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

export const install: UserModule = ({ app }) => {
  app.use(router)
}
