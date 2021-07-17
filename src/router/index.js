import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home/index.vue')
  },
  {
    name: 'Search',
    path: '/search',
    component: () => import('../views/Search.vue')
  },
  {
    name: 'PlayListDetail',
    path: '/playlist/detail/:id',
    component: () => import('../views/PlayListDetail.vue')
  },
  {
    name: 'ProgramDetail',
    path: '/program/detail/:id',
    component: () => import('../views/ProgramDetail.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
