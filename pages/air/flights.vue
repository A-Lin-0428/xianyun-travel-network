<template>
  <div class="contianer w">
    <el-row type="flex" justify="space-between">
      <!-- 主体部分 -->
      <div class="flights_content">
        <!-- 机票详情头部组件 -->
        <FlightsHeader />

        <!-- 机票详情组件 -->
        <FlightsItem v-for="(item,index) in fligthsDate.flights" :key="index" :data="item" />

        <!-- 分页设置 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[2, 4, 6, 8]"
          :page-size="pageNum"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
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
  },
  data() {
    return {
      fligthsDate: {},
      pageIndex: 1,
      pageNum: 2,
      total: 0,
      dataList: []
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageNum = val
      //刷新列表数据
      this.getDataList()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      //0,2   2,4    4,6
      this.pageIndex = val
      //刷新列表数据
      this.getDataList()
    },
    // 获取分页的数据
    getDataList() {
      // 修改dataList的数据
      this.dataList = this.fligthsDate.flights.slice(
        (this.pageIndex - 1) * this.pageNum,
        (this.pageIndex - 1) * this.pageNum + this.pageNum
      )
    },
    // 获取机票详情数据
    getAllFlightsList() {
      this.$axios({
        url: '/airs',
        method: 'GET',
        params: this.$route.query
      }).then(res => {
        // console.log(res)
        this.fligthsDate = res.data
        this.total = res.data.flights.length
      })
    }
  },
  mounted() {
    // 获取机票详情数据
    this.getAllFlightsList()
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
