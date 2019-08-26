// 这个文件是用于封装存储用户信息的

// 定义一个全局存储用户信息的key的名字
const KEY = 'my-user'
// 用于提供存储信息的函数，提供获取用户信息的函数，提供删除用户信息的函数
export default {
  // 存储用户信息
  setUser (user) {
    // 因为需要把数据存储在服务器中，所以需要先转换成JSON格式的
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取用户信息
  getUser () {
    // 把在服务器中获取到的信息用一个变量来接收，但是有可能也会接收的没有数据，那么返回的就是""空字符串，所以需要进行一下判断
    // 如果接收到的是有数据的，那么就正常运行，如果接收到的是一个空字符串那么就转换为一个空对象，这样解析出来不会报错，会提示undefined
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    // 在服务器接收到的数据是JSON格式的，所以需要转化为js对象，然后再把结果返回即可

    // console.log(JSON.parse(jsonStr).token)
    return JSON.parse(jsonStr)
  },
  // 删除用户信息
  removeUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
