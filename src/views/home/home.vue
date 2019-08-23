<template>
  <el-container class="my-container">
    <el-aside width="200px">
      <div class="logo"></div>
    </el-aside>
    <el-container>
      <!-- header内容 -->
      <el-header>
        <span class="icon el-icon-s-fold"></span>
        <span class="headerText">江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="rightList">
          <span class="el-dropdown-link">
            <!-- 要显示的内容 -->
            <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
            <span class="username">  用户名</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- 下拉菜单的内容 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
          <!-- 下拉菜单的内容end -->
        </el-dropdown>
        <!-- 下拉菜单end -->
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.my-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .logo {
    width: 100%;
    height: 60px;
    background: #002244 url(../../assets/images/logo_admin.png) no-repeat center / 140px auto;
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .headerText {
      vertical-align: middle;
    }
    .rightList {
      float: right;
      .avatar {
        width: 30px;
        vertical-align: middle;
        margin-right: 5px;
      }
      .username {
        font-weight: bold;
        color: #333;
        vertical-align: middle;
      }
    }
  }
  .el-aside {
    background: #002033;
  }
}
</style>
