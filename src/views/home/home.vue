<template>
  <el-container class="my-container">
    <el-aside :width="flag ? '64px' : '200px'">
      <div class="logo" :class="{miniLogo : flag}"></div>
      <!-- 侧边导航结构设置 -->
      <!-- default-active默认选择的哪个导航信息
           active-text-color选择的导航信息的字体颜色
           collapse是否把侧边导航展开(false)或收起(true)
           collapse-transition是否开启动画效果，默认是true
           router是否开启路由模式，默认是false，只写router不写值也是true
       -->
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="flag"
        :collapse-transition="false"
        router
      >
      <!-- 开启路由模式之后就会把对应index的属性添加到地址栏中 -->
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- header内容 -->
      <el-header>
        <span class="icon el-icon-s-fold" @click="toggleMenu()"></span>
        <span class="headerText">江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="rightList">
          <span class="el-dropdown-link">
            <!-- 要显示的内容，显示真实的用户信息 -->
            <img class="avatar" :src="photo" alt />
            <span class="username">{{name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- 下拉菜单的内容 -->
          <el-dropdown-menu slot="dropdown">
            <!-- 因为el-dropdown-item是不支持dom事件的绑定，所以需要用事件修饰符把原生的dom绑定在组件上 -->
            <el-dropdown-item icon="el-icon-setting" @click.native="setting()">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" @click.native="logoOut()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
          <!-- 下拉菜单的内容end -->
        </el-dropdown>
        <!-- 下拉菜单end -->
      </el-header>
      <!-- 这里显示的welcome路由页面的内容，所以需要用router-view占位显示 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from '../../store/index'
export default {
  data () {
    return {
      // 定义一个开关，为false的时候侧边栏展开，为true的时候侧边栏收起
      flag: false,
      // 定义两个空字符串，用于接收用户名字和头像
      name: '',
      photo: ''
    }
  },
  created () {
    // 获取到当前的用户信息
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    // 出发事件会跳转用户信息
    setting () {
      this.$router.push('/setting')
    },
    // 触发事件会退出登录
    logoOut () {
      // 清空用户信息
      store.removeUser()
      // 清空了用户信息，但是需要跳转到登录页面
      this.$router.push('/login')
    },
    // 给icon span定义一个开关的事件
    toggleMenu () {
      // 点击的时候会flag会取反，每点击一次就会与当前的取反
      this.flag = !this.flag
    }
  }
}
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
    background: #002244 url(../../assets/images/logo_admin.png) no-repeat center /
      140px auto;
  }
  .miniLogo {
    background-image: url(../../assets/images/logo_admin_01.png);
    background-size: 36px auto;
  }
  .el-menu {
    border: none;
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
        cursor: pointer;
      }
    }
  }
  .el-aside {
    background: #002033;
  }
}
</style>
