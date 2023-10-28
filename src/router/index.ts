import { createRouter, createWebHistory } from 'vue-router';
import dashboard from './dashboard';

const routes: any = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/views/dashboard/menuChartOne/index.vue')
  }

]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});


export default router
