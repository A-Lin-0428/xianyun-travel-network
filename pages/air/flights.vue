<template>
  <div class="contianer w">
    <el-row type="flex" justify="space-between">
      <!-- 主体部分 -->
      <div class="flights_content">
        <!-- 机票详情头部组件 -->
        <FlightsHeader />

        <!-- 机票详情组件 -->
        <FlightsItem />
      </div>
      <!-- 侧边栏部分 -->
      <aside></aside>
    </el-row>
  </div>
</template>
<script>
// 引入组件
import FlightsHeader from '@/components/air/flightsHeader'
import FlightsItem from '@/components/air/flightsItem.vue'
export default {
  components: {
    FlightsHeader, FlightsItem
  }
}
</script>
<style lang="less" scoped>
.contianer {
  .flights_content {
    width: 745px;
  }
  aside {
    width: 240px;
  }
}
</style>
