<template>
  <div class="container w">
    <!-- 面包屑样式 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 预订需求组件 -->
    <RequireSelect />

    <!-- 城市地区和地图结构显示 -->
    <el-row type="flex" :gutter="20">
      <el-col :span="14">
        <AddressShow />
      </el-col>
      <el-col :span="10">
        <MapShow />
      </el-col>
    </el-row>

    <!-- 酒店要求 -->
    <HotelSelect />

    <!-- 各大品牌酒店明细 -->
    <HotelList />

    <!-- 下一页的结构 -->
    <div class="nextPage">
      <el-row type="flex" justify="end">
        <el-pagination layout="prev, pager, next" :total="1"></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引用组件
import RequireSelect from '@/components/hotel/requireSelect'
import AddressShow from '@/components/hotel/addressShow'
import MapShow from '@/components/hotel/mapShow'
import HotelSelect from '@/components/hotel/hotelSelect'
import HotelList from '@/components/hotel/hotelList'
export default {
  components: {
    RequireSelect, AddressShow, MapShow, HotelSelect, HotelList
  }
}
</script>

<style lang="less" scoped>
.container {
  margin-top: 25px;
  .nextPage {
    margin: 30px 0;
  }
}
</style>

