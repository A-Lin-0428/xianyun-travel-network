<template>
  <div class="container w">
    <el-row type="flex" justify="space-between">
      <el-col :span="14">
        <OrderForm />
      </el-col>
      <el-col :span="10"></el-col>
    </el-row>
  </div>
</template>
<script>

// 引用组件
import OrderForm from '@/components/air/orderForm'
export default {
  components: {
    OrderForm
  }
}
</script>
<style lang="less" scoped>
</style>

