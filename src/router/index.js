// 导入vue文件
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入login登录页面组件
import Login from '../views/login/index.vue'
// 导入home主页面组件
import Home from '../views/home/home.vue'
// 导入welcome首页页面组件
import Welcome from '../views/welcome/welcome.vue'
// 导入404页面组件
import NotFound from '../views/404/404.vue'
// 导入store/index文件
import store from '../store/index'
// 导入article组件
import Article from '../views/article/article.vue'
// 注册路由
Vue.use(VueRouter)
// 实例化路由
const router = new VueRouter({
  // 规定路由规则
  routes: [
    {
      // 需要注意的是如果子路由有name属性，那么就不要给父路由设置name属性，否则这样会提示警告
      path: '/',
      component: Home,
      children: [
        // 规则welcome规则
        // welcome路由页面是home页面的二级页面，所以需要定义一个子路由
        // 因为welcome页面是第一个显示的页面，所以把锚点设置和home一样即可
        { path: '/', name: 'welcome', component: Welcome },
        // 规定article规则
        { path: '/article', name: 'article', component: Article }
      ]
    },
    { path: '/login', name: 'login', component: Login },
    // 设置一个404页面，如果用户输入的网址有误就会提示这个页面，不会影响用户体验，否则一片白会让用户不舒服
    // *是通配符，代表所有的页面，如果这里的所有页面都没有符合的，那么才会出现404页面
    { path: '*', name: '404', component: NotFound }
  ]
})
// 根据客户端上所存储的信息进行判断，查看是否登录过，使用导航守卫
router.beforeEach((to, from, next) => {
  // 使用变量接收到获取到的用户信息
  const user = store.getUser()
  // 进行访问权限的控制，除了登录页面以外，想要访问必须要先登录，所以在路由跳转前进行判断
  if (to.path !== '/login' && !user.token) return next('/login')
  next()
})
// 导出路由
export default router
