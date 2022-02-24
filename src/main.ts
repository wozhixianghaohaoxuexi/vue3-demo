import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 引入vue-router
app.use(router)
// 挂载
app.mount('#app')
