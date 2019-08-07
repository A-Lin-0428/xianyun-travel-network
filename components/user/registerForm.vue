<template>
  <div class="registerForm">
    <el-form ref="registerForm" :model="registerForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" placeholder="用户手机号"></el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <el-input v-model="registerForm.captcha" placeholder="输入验证码">
          <el-button slot="append" @click="handleCaptcha">发送验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="nickname">
        <el-input v-model="registerForm.nickname" placeholder="你的名字"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerForm.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input v-model="registerForm.checkPassword" placeholder="确认密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="handleRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.checkPassword !== '') {
          this.$refs.registerForm.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: '',
        nickname: '',
        captcha: '',
        password: '',
        checkPassword: ''
      },
      rules: {
        username: [{ required: true, message: '请输入手机号码', tirgger: 'blur' }],
        captcha: [{ required: true, message: '请输入验证码', tirgger: 'blur' }],
        nickname: [{ required: true, message: '请输入昵称', tirgger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPassword: [{ validator: validatePass2, trigger: 'blur' }],
      }
    }
  },
  methods: {
    // 点击注册按钮，提交注册
    handleRegister() {
      // 获取传入的参数
      const { checkPassword, ...props } = this.registerForm
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.$axios({
            url: '/accounts/register',
            method: 'POST',
            data: props
          }).then(res => {
            // console.log(res)
            //提示用户注册成功
            this.$message.success('注册成功')
            //直接登录
            this.$store.commit('user/getUserInfo', res.data)
            this.$router.push('/')
          })
        }
      })
    },
    // 获取手机验证码
    handleCaptcha() {
      if (!this.registerForm.username) {
        // 提示用户需要输入手机号码
        this.$message.warning('请先输入手机号码')
        return
      }
      this.$axios({
        url: '/captchas',
        method: 'POST',
        data: {
          tel: this.registerForm.username
        }
      }).then(res => {
        // console.log(res.data)
        this.$alert(`模拟手机验证码为：${res.data.code}`, '提示', { type: 'warning' })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.registerForm {
  background-color: #fff;
  padding: 20px;
}
.btn {
  width: 100%;
}
</style>

