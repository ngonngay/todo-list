import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('@/layouts/App.vue'),
    redirect: '/to-do',
    children: [
      {
        path: '/to-do',
        component: () => import('@/pages/ToDo.vue'),
      },
      {
        path: '/in-progress',
        component: () => import('@/pages/InProgress.vue'),
      },
      {
        path: '/completed',
        component: () => import('@/pages/Completed.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
