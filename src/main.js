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
// 注册element-ui
Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
