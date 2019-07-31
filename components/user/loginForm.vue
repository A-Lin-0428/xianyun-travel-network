<template>
  <div class="loginForm">
    <el-form ref="loginForm" :model="loginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$axios({
            url: '/accounts/login',
            method: 'post',
            data: this.loginForm
          }).then(res => {
            // // console.log(res)
            // this.$state.userInfo = res.data
            // console.log(this.$store)
            this.$store.commit('user/getUserInfo', res.data)
            this.$router.push('/')
          })
        }
      })
    }
  }
} 
</script>

<style lang="less" scoped>
.loginForm {
  background-color: #fff;
  padding: 20px;
}
.btn {
  width: 100%;
}
</style>

