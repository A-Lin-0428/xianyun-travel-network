<template>
  <el-row type="flex" justify="center" class="login" align="middle">
    <div class="container">
      <el-row type="flex" justify="center" class="login_header">
        <!-- tabs标签页 -->
        <span
          v-for="(item,index) in ['登陆','注册']"
          :key="index"
          @click="handleClick(index)"
          :class="{active:current==index}"
        >{{item}}</span>
      </el-row>
      <!-- 登录的组件 -->
      <LoginForm v-if="current==0" />
      <!-- 注册的组件 -->
      <RegisterForm v-if="current==1" />
    </div>
  </el-row>
</template>
<script>
import LoginForm from '@/components/user/loginForm'
import RegisterForm from '@/components/user/registerForm'
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      current: 0

    }
  },
  methods: {
    handleClick(index) {
      this.current = index
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 700px;
  background: url("http://157.122.54.189:9093/images/bar1.jpg") no-repeat;

  .container {
    .login_header {
      width: 400px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #eeeeee;
      span {
        flex: 1;
        color: #666;
      }
    }
    .active {
      background-color: #fff;
      color: #ffa500 !important;
      border-top: 2px solid #ffa500;
    }
  }
}
</style>

