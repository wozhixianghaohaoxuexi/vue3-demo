import { RouteRecordRaw } from 'vue-router'

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
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/pages/home/Test.vue')
  }
]

export default routes