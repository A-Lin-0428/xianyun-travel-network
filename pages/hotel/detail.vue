<template>
  <div class="detail">
    <div class="container">
      <!-- 酒店详情头部 -->
      <div class="header">
        <el-row class="crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="hotel" :to="{ path: '>' }">酒店</el-breadcrumb-item>
            <el-breadcrumb-item class="hotel">南京酒店</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in crumbList" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>

        <div class="hotelTitle">
          <h4>{{hotelList.name}}</h4>
          <span class="hotellevel">
            <i class="iconfont iconhuangguan" v-for="(item,index) in hotelLevel" :key="index"></i>
          </span>
        </div>

        <div>
          <p>{{hotelList.alias}}</p>
        </div>

        <div>
          <i class="iconfont iconlocation">{{hotelList.address}}</i>
        </div>
      </div>

      <!-- 酒店详情介绍(图片和价格) -->
      <HotelDetailIntroduce :data="hotelList" />

      <!-- 酒店详情地图(位置.风景和交通) -->
      <HotelDetailMap :data="hotelList" />

      <!-- 酒店详情信息 -->
      <HotelDetailInfo :data="hotelList" />

      <!-- 酒店详情尾部 -->
      <HotelDetailFooter :data="list" />
    </div>
  </div>
</template>

<script>
import HotelDetailFooter from "@/components/hotel/hotelDetailFooter.vue";
import HotelDetailInfo from "@/components/hotel/hotelDetailInfo.vue";
import HotelDetailMap from "@/components/hotel/hotelDetailMap.vue";
import HotelDetailIntroduce from "@/components/hotel/hotelDetailIntroduce.vue";

export default {
  components: {
    HotelDetailFooter,
    HotelDetailInfo,
    HotelDetailMap,
    HotelDetailIntroduce
  },
  data() {
    return {
      // 某酒店数据列表
      // 因为请求时异步,数据不知什么时候返回来,需在里面设置子组件里面用到的属性(空数组或空对象)
      hotelList: {
        hotelbrand: {},
        hotelassets: []
      },
      // 定义一个空对象,承载负责传给子组件数据
      list: {
        hotelList: {
          all_remarks:0,
          very_good_remarks:0,
          very_bad_remarks:0,
          stars:0,
          scores:{}
        },
        pc_environment:0,
        pc_service:0,
        pc_product:0
      },
      // 面包屑列表
      crumbList: [],
      // 酒店等级
      hotelLevel: []
    };
  },
  mounted() {
    this.$axios({
      url: "http://157.122.54.189:9095/hotels?id=4"
    }).then(res => {
      console.log(res);
      this.hotelList = res.data.data[0];
      this.hotelLevel = this.hotelList.hotellevel.level;
      // 返回信息为字符串,需换成数组
      this.crumbList = res.data.data[0].breadcrumb.split(">");

      // 处理酒店评分数据
      this.list.pc_environment = this.hotelList.scores.environment * 10;
      this.list.pc_product = this.hotelList.scores.product * 10;
      this.list.pc_service = this.hotelList.scores.service * 10;
      // 赋值给list
      this.list.hotelList = this.hotelList;
    });
  }
};
</script>

<style scoped lang='less'>
.detail {
  .container {
    margin: 0 auto;
  }
}
.header {
  width: 1000px;
  margin: 0 auto;
  .crumbs {
    padding: 20px 0;
    .hotel {
      font-size: 12px;
      font-weight: 900;
      color: #303133;
    }
  }
  .hotelTitle {
    display:flex;
    
    h4 {
      // float: left;
      font-weight: 400;
      font-size: 26px;
    }
    .hotellevel {
      display: block;
      color: orange;
      height: 36px;
      line-height: 36px;
      margin-left:8px;
    }
  }
}
</style>
