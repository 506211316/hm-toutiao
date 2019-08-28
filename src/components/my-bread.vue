<template>
<!-- 封装面包屑插件 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <!-- 这里使用默认插槽占位 -->
    <el-breadcrumb-item><slot></slot></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  // 定义组件的名字
  name: 'my-bread'
}
</script>

<style lang="less" scoped>
</style>
