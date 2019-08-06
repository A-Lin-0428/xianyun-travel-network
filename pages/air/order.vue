<template>
  <div class="container w">
    <el-row type="flex" justify="space-between">
      <el-col :span="14">
        <OrderForm :data="infoData.insurances" />
      </el-col>
      <el-col :span="10"></el-col>
    </el-row>
  </div>
</template>
<script>

// 引用组件
import OrderForm from '@/components/air/orderForm'
export default {
  data() {
    return {
      infoData: {
        insurances: []
      }
    }
  },
  components: {
    OrderForm
  },
  methods: {
    getData() {
      const { id, seat_xid } = this.$route.query
      // 获取保险列表信息
      this.$axios({
        url: '/airs/' + id,
        params: { seat_xid, }
      }).then(res => {
        // console.log(res)
        this.infoData.insurances = res.data.insurances
        console.log(this.infoData)
      })
    }
  },
  mounted() {
    this.getData()
    // 先获取到发送请求的id和seat_xid的值

  }
}
</script>
<style lang="less" scoped>
</style>

