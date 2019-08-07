<template>
  <div class="header">
    <div class="container w">
      <el-row type="flex" justify="space-between">
        <div class="logo">
          <h1>闲云旅游</h1>
        </div>
        <el-row type="flex" class="navs">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>
        <div class="login">
          <!-- 用户信息不存在，显示登录/注册 -->
          <nuxt-link to="/user/login" v-if="!$store.state.user.userInfo.token">登陆/注册</nuxt-link>

          <!-- 如果用户存在则展示用户信息，用户数据来自登录页面 -->
          <el-dropdown v-else>
            <el-row type="flex" align="middle">
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              <span class="el-dropdown-link">
                {{$store.state.user.userInfo.user.nickname}}
                <i
                  class="el-icon-arrow-down el-icon--right"
                ></i>
              </span>
            </el-row>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <nuxt-link to="/">个人中心</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="handleExit">
                <nuxt-link to>退出</nuxt-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    //  点击退出按钮
    handleExit() {
      //页面跳转到首页
      this.$router.push('/')
      // 清空user的数据信息
      this.$store.commit('user/clearUserInfo')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 3px 3px #ccc;

  .logo {
    h1 {
      margin-top: 9px;
      display: block;
      width: 156px;
      height: 40px;
      font-size: 0px;
      background: url("http://157.122.54.189:9093/images/logo.jpg") no-repeat;
      background-size: contain;
    }
  }
  .navs {
    margin-left: 40px;
    box-sizing: border-box;
    flex: 1;

    a {
      display: block;
      height: 60px;
      padding: 0 20px;
      box-sizing: border-box;
      &:hover {
        border-bottom: 5px solid #409eff;
        color: #409eff;
      }
    }
    /deep/ .nuxt-link-exact-active {
      background-color: #409eff;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
  .login {
    color: #666;
    a {
      &:hover {
        border-bottom: 1px solid #409eff;
        color: #409eff;
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
}
</style>
