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
          <nuxt-link to="/user/login">登陆/注册</nuxt-link>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

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
  }
}
</style>
