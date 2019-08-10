<template>
  <div class="container">
    <div class="main">
      <div class="pay-title">
        支付总金额
        <span class="pay-price">￥{{paydetail.price}}</span>
      </div>
      <div class="pay-main">
        <h4>微信支付</h4>
        <el-row type="flex" justify="space-between" align="middle" class="pay-qrcode">
          <div class="qrcode">
            <!-- 二维码 -->
            <canvas id="qrcode-stage"></canvas>
            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
          <div class="pay-example">
            <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt />
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
// 生成二维码的插件引入
import Qrcode from 'qrcode'
export default {
  data() {
    return {
      paydetail: {},
      timer: null
    }
  },
  methods: {
    //  获取付款信息，每3秒查询一次
    ispay() {
      return this.$axios({
        url: '/airorders/checkpay',
        method: 'POST',
        data: {
          id: this.paydetail.id,
          nonce_str: this.paydetail.price,
          out_trade_no: this.paydetail.orderNo
        },
        headers: { Authorization: `Bearer ${this.$store.state.user.userInfo.token}` }
      }).then(res => {
        // console.log(res)
        return res.data
      })
    }

  },
  mounted() {

    // 获取到id
    const { id } = this.$route.query
    // 根据id获取订单详情
    this.$axios({
      url: `/airorders/${id}`,
      headers: { Authorization: `Bearer ${this.$store.state.user.userInfo.token}` }
    }).then(res => {
      // console.log(res)
      // 接收到机票付款明细
      this.paydetail = res.data

      // 生成二维码到canvas
      const stage = document.querySelector('#qrcode-stage')
      Qrcode.toCanvas(stage, this.paydetail.payInfo.code_url, {
        width: 200
      })

      this.timer = setInterval(() => {
        // 查询订单的状态
        this.ispay().then(val => {
          // console.log(val)
          if (val.statusTxt === '支付完成') {
            clearInterval(this.timer)
            // 并提示用户付款成功
            this.$message.success('订单付款成功')
            // 跳转到首页
            this.$router.push('/')
          }
        })


      }, 3000)
    })
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
.container {
  background: #f5f5f5;
  padding: 30px 0;

  .main {
    width: 1000px;
    margin: 0 auto;

    .pay-title {
      text-align: right;
      span {
        font-size: 28px;
        color: orangered;
      }
    }

    .pay-main {
      background: #fff;
      margin-top: 10px;
      border-top: 5px orange solid;
      padding: 30px;

      h4 {
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .pay-qrcode {
        padding: 0 80px;
      }

      .qrcode {
        border: 1px #ddd solid;
        padding: 15px;
        height: fit-content;

        #qrcode-stage {
          width: 200px;
          height: 200px;
          margin-bottom: 10px;
        }

        p {
          line-height: 2;
          text-align: center;
        }
      }
    }
  }
}
</style>