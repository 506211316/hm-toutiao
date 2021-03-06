// 导入vue文件
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入login组件
import Login from '../views/login/index.vue'
// 导入home主页面组件
import Home from '../views/home/home.vue'
// 注册路由
Vue.use(VueRouter)
// 实例化路由
const router = new VueRouter({
  // 规定路由规则
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login }
  ]
})
// 导出路由
export default router
