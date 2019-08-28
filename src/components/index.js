// 导入面包屑组件
import MyRouter from './my-bread.vue'
// 导出封装面包屑插件
export default {
  // 定义一个install函数，并且传入一个参数Vue
  install (Vue) {
    // 把components下面的my-bread组件注册为全局组件
    // Vue.component('组件名称'，'组件配置对象')
    Vue.component(MyRouter.name, MyRouter)
  }
}
