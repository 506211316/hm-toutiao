import Vue from 'vue'
import App from './App.vue'

// 导入router路由里面的index文件
import router from '@/router'

// 导入less文件
imp

// 导入element-UI
import ElementUi from 'element-ui'

// 导入element-UI的css样式
import 'element-ui/lib/theme-chalk/index.css'

// 注册ElementUi
Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
