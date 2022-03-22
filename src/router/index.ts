import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";


// 创建路由对象，指定路由方式和路由数组
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router