<template>
  <div class="container w">
    <!-- 面包屑样式 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 预订需求组件 -->
    <RequireSelect @getCityInfo="getCityInfo" />

    <!-- 城市地区和地图结构显示 -->
    <el-row type="flex" :gutter="20">
      <el-col :span="14">
        <AddressShow :data="CityInfo" />
      </el-col>
      <el-col :span="10">
        <MapShow />
      </el-col>
    </el-row>

    <!-- 酒店要求 -->
    <HotelSelect :Info="cacheHotelInfo" @getFliterHotel="getFliterHotel" />

    <!-- 各大品牌酒店明细 -->
    <HotelList :data="hotelInfo" />

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
  },
  data() {
    return {
      CityInfo: {},
      cacheHotelInfo: [],
      hotelInfo: [],
      CityId: ''
    }
  },
  methods: {
    //  通过事件接收addressShow下来的数据
    getCityInfo(item) {
      console.log(item)
      this.CityInfo = item
    },
    // 获取筛选后的数据
    getFliterHotel(arr) {
      // 刷新数据
      this.hotelInfo = arr
    }
  },
  // watch: {
  //   immediate: true,
  //   // 监视url的变化,并获取到城市id
  //   $route() {
  //     // 获取到城市id
  //     const { city } = this.$route.query
  //     this.$route({
  //       url: '/hotels',
  //       params: { city }
  //     }).then(res => {
  //       console.log(res)
  //     })
  //   }
  // }
  mounted() {
    //  根据id，获取城市信息
    // 自动拼接url
    this.$router.push({ query: { city: 74 } })
    // 发送请求
    this.$axios({
      url: '/hotels',
      params: { city: this.$route.query.city }
    }).then(res => {
      // console.log(res)

      this.hotelInfo = res.data.data

      // 缓存一个总数据
      this.cacheHotelInfo = [...res.data.data]
    })
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

