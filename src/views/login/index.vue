<template>
  <div id="content">
    <!-- 使用element-ui插件，插入卡片模块 -->
    <el-card class="box-card">
      <!-- 插入logo图片 -->
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 插入form表单，设置控件 -->
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
          <el-button type="primary" style="width:100%;" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
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
        mobile: '',
        code: ''
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
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$http.post(
            'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            this.loginForm
          ).then(res => {
            this.$router.push('/')
          }).catch(() => {
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
