// 导入vue文件
import Vue from 'vue'

// 导入vue-router路由
import VueRouter from 'vue-router'

// 导入index.vue组件
import Login from '../views/login'

// 注册路由
Vue.use(VueRouter)

// 实例化路由
const router = new VueRouter({
  // 规定路由规则
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})

// 导出router
export default router
