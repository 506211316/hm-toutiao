<template>
  <div class="container">
    <!-- 使用element-ui的卡片组件 -->
    <el-card class="card">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 创建form表单 -->
      <el-form class="demo-ruleForm">
        <el-form-item>
          <el-input v-model="ruleForm" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="message" placeholder="输入验证码" style="width:236px; margin-right:25px;"></el-input>
          <el-button>发送信息</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;">主要按钮</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: '',
      message: ''
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  top: 0;
  left: 0;
  .card {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 10px;
    }
  }
}
</style>
