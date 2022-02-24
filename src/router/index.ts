import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 定义路由数组
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/Home.vue')
  }
]

// 创建路由对象，指定路由方式和路由数组
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router