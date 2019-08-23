<template>
  <el-container class="my-container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <!-- header内容 -->
      <el-header>
        <span class="icon el-icon-s-fold"></span>
        <span class="headerText">江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="rightList">
          <span class="el-dropdown-link">
            <!-- 要显示的内容 -->
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- 下拉菜单的内容 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
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
    }
  }
  .el-aside {
    background: #002033;
  }
}
</style>
