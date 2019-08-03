<template>
  <div class="flightsHeader">
    <!-- 头部详情 -->
    <el-row type="flex" justify="space-around" class="flightNav">
      <span>航空信息</span>
      <span>起飞时间</span>
      <span>到达时间</span>
      <span>价格</span>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.flightsHeader {
  .flightNav {
    margin: 20px 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #f6f6f6;
    span {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
