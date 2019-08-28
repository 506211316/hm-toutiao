import Vue from 'vue'
import App from './App.vue'

// 导入element-ui模块
import ElementUi from 'element-ui'

// 导入ElementUi样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入less文件
import './styles/index.less'

// 导入路由组件
import router from '@/router'
// 导入面包屑自定义插件
import MyBread from './components/index'
// 导入store/index组件
import axios from './api/index'

// 把axios定义为Vue里面的一个成员，方便调用vue里面的属性
Vue.prototype.$http = axios
// 注册面包屑插件
Vue.use(MyBread)
// 注册element-ui
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
