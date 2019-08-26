<template>
  <div id="content">
    <!-- 使用element-ui插件，插入卡片模块 -->
    <el-card class="box-card">
      <!-- 插入logo图片 -->
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 插入form表单，设置控件 -->
      <!-- ref就是把当前的这个标签中的所有内容都获取到了，就可以认为ref类似于id，而后面的就是自定义的名字 -->
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
        <!-- 输入手机号模块 -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 输入验证码的模块 -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:236px; margin-right:10px"
          ></el-input>
          <!-- 发送验证码按钮 -->
          <el-button>发送验证码</el-button>
        </el-form-item>
        <!-- 同意条款 -->
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    // 因为手机号的规则比较严格，所以使用了自定义的校验
    // 在这个函数有三个参数，rule: 校验规则对象， value：当前输入的内容
    // callback是一个校验后回调函数
    // 直接调用callback() 就是成功了，失败就是在回调函数中定义一个new Error('显示错误信息')
    const checkLogin = (rule, value, callback) => {
      // 使用正则判断手机号
      if (!/^1[3-9]\d{9}$/.test(value)) {
        // 如果手机号错误就阻止继续往下执行
        return callback(new Error('手机号格式不正确'))
      }
      // 成功就直接调用
      callback()
    }
    return {
      loginForm: {
        mobile: '15241063313',
        code: '246810'
      },
      // 校验规则的对象
      loginRules: {
        // 定义手机号校验的规则
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkLogin, trigger: 'change' }
        ],
        // 定义验证码校验的规则
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // $refs就是ref，可以理解为ref是获取当前标签中的dom元素，然后通过$refs来调用其中的属性或方法
      // ref和$refs就是从父组件中获取子组件的属性或方法
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 如果结果为true那么就发送axios请求
          this.$http
            .post(
            // 接口是外网的接口
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              // 因为要求的参数是对象，并且参数的属性名和loginForm中的一样，所以直接就用this.loginForm就可以
              this.loginForm
            // axios响应的结果是promise对象，所以可以使用then和catch方法
            // 成功就使用then(res => {})，res代表成功返回的结果
            ).then(res => {
            // 调用setUser方法，保存用户的信息
              // console.log(res.data.data)
              store.setUser(res.data.data)
              // 如果成功了就跳转到home页面
              this.$router.push('/')
            // catch是失败，如果有问题就会输出这个，这里暂时不需要填写参数，否则会有问题
              // eslint-disable-next-line handle-callback-err
            }).catch(error => {
            // 如果失败了就会有一个弹出框的提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .box-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>
