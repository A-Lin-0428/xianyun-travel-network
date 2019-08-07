<template>
  <div class="container">
    <div class="passengerInfo">
      <h2>乘机人</h2>
      <el-form v-for="(item,index) in users" :key="index" style="position: relative;">
        <el-form-item label="乘机人类型">
          <el-input placeholder="姓名" v-model="item.username" class="input-with-select">
            <el-select value="1" slot="prepend" placeholder="请选择">
              <el-option label="成人" value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-input placeholder="证件号码" v-model="item.id" class="input-with-select">
            <el-select value="1" slot="prepend" placeholder="请选择">
              <el-option label="身份证" value="1"></el-option>
              <el-option label="护照" value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <span class="delete-user" v-show="index!=0" @click="handleDel(index)">-</span>
      </el-form>
    </div>
    <el-button type="primary" class="add-user" @click="handleAddUser">添加乘机人</el-button>
    <div class="insurance">
      <h2>保险</h2>
      <div class="insurance-item" v-for="(item, index) in data.insurances" :key="index">
        <el-checkbox
          :label="`${item.type}：￥${item.price}/份×${users.length}  最高赔付${item.compensation}`"
          @change="handleChange(item)"
          border
        ></el-checkbox>
      </div>
      <!-- <el-checkbox-group v-for="(item,index) in data.insurances" :key="index">
        <el-checkbox
          :label="`${item.type}：￥${item.price}/份x1 最高赔付${item.compensation}`"
          border
          @change="handleChange(item)"
      ></el-checkbox>-->
      <!-- </el-checkbox-group> -->
    </div>
    <div class="linkman">
      <h2>联系人</h2>
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="contactName"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input placeholder="请输入内容" v-model="contactPhone">
            <template slot="append">
              <el-button @click="handleSendCaptcha">发送验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="captcha"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="warning" class="btn" @click="handleOrder">提交订单</el-button>
    <!-- 调用allpice让总价开始计算 -->
    <input type="hidden" :value="getAllPrice" />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      users: [{ username: '', id: '' }],
      insurances: [],
      contactName: '',
      contactPhone: '',
      captcha: '',
      invoice: false,
      seat_xid: '',
      air: 0
    }
  },
  methods: {
    // 添加乘机人
    handleAddUser() {
      // 给users添加一个对象
      this.users.push({ username: '', id: '' })
    },
    // 点击删除乘机人
    handleDel(index) {
      this.users.splice(index, 1)
    },
    // 点击保险选项的触发
    handleChange(item) {
      // console.log(item)
      // 判断数组中是否存在id,如果存在需要删除
      const index = this.insurances.indexOf(item.id)
      if (index > -1) {
        this.insurances.splice(index, 1)
      } else {
        this.insurances.push(item.id)
      }
    },
    // 点击发送验证码按钮触发
    handleSendCaptcha() {
      // console.log(123)
      // 判断手机号码是否为空
      if (!this.contactPhone) {
        this.$message.warning('手机号码不能为空');
        return
      }
      this.$axios({
        url: '/captchas',
        method: 'POST',
        data: {
          tel: this.contactPhone
        }
      }).then(res => {
        const { code } = res.data
        this.$alert(`模拟手机验证码为：${code}`, '提示', { type: " warning" })
      })
    },
    // 点击提交订单
    handleOrder() {
      const data = {
        users: this.users,
        insurances: this.insurances,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        invoice: this.invoice,
        captcha: this.captcha,
        seat_xid: this.$route.query.seat_xid,
        air: this.$route.query.id
      }

      let valid = true
      // 验证乘机人信息不能为空
      this.users.forEach(val => {
        if (!val.username || !val.id) {
          //  不通过
          valid = false
          this.$alert("乘机人信息不能为空", "提示", { type: "warning" })
        }

      });

      if (!valid) {
        return
      }
      // 验证联系人不能为空
      if (!this.contactPhone) {
        this.$alert("联系人信息不能为空", "提示", { type: "warning" })
        return
      }
      // 验证验证码按钮不能为空
      if (!this.captcha) {
        return
      }
      this.$axios({
        url: '/airorders',
        method: 'POST',
        headers: { Authorization: `Bearer ${this.$store.state.user.userInfo.token}` },
        data
      }).then(res => {
        // 温馨提示用户
        // console.log(res)

        this.$message.success('订单提交成功，正在跳转')

        setTimeout(() => {

          const { id } = res.data.data


          // console.log(this.data)
          // 生成订单成功，跳转到付款页面中
          this.$router.push({
            path: '/air/pay',
            query: { id }
          })
        }, 1000)

      })


    }

  },
  computed: {
    // 计算总价格
    getAllPrice() {
      let price = 0;
      // 接口还没有返回，默认是0
      if (!this.data.seat_infos) {
        return 0
      }
      // 单价
      price += this.data.seat_infos.org_settle_price
      // 保险
      price += this.insurances.length * 30
      // 燃油费
      price += this.data.airport_tax_audlet

      // 人数
      price *= this.users.length
      // 把总价格返回给父组件
      this.$emit("getAllPrice", price)
      return price;
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.insurances = this.data.insurances
    //   console.log(this.data)
    // }, 1000)

  }

}
</script>
<style lang="less" scoped>
.container {
  margin: 20px 0;
  padding-bottom: 30px;
  border-bottom: 1px dashed #ddd;
  .delete-user {
    display: block;
    background: #ddd;
    width: 16px;
    height: 16px;
    font-size: 14px;
    text-align: center;
    line-height: 16px;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    position: absolute;

    right: -30px;
    top: 50%;
  }
  .add-user {
    margin: 20px 0;
  }
  h2 {
    font-weight: normal;
    margin: 20px 0;
  }
  .insurance {
    padding-bottom: 40px;
    border-bottom: 1px dashed #ddd;
    border-top: 1px dashed #ddd;
  }
  /deep/.el-checkbox {
    width: 317px;
    height: 40px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }

  .linkman {
    /deep/ .el-input {
      width: 300px;
      height: 30px;
    }
  }

  .btn {
    width: 268px;
    height: 58px;
    text-align: center;
    line-height: 37px;
    margin-left: 200px;
  }
  /deep/.el-input-group__prepend {
    .el-input__inner {
      width: 100px;
    }
  }
}
</style>

