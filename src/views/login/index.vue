<template>
  <div id="content">
    <!-- 使用element-ui插件，插入卡片模块 -->
    <el-card class="box-card">
      <!-- 插入logo图片 -->
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 插入form表单，设置控件 -->
      <el-form :model="form" red="loginForm">
        <el-form-item>
          <el-input v-model="form.name" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 输入验证码的模块 -->
        <el-form-item>
          <el-input v-model="form.message" placeholder="请输入验证码" style="width:236px; margin-right:10px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="sub">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        message: ''
      }
    }
  },
  methods: {
    sub () {
      console.log(this.$refs)
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
