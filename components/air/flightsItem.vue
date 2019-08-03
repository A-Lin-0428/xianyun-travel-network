<template>
  <div class="container">
    <div class="flightsItem">
      <!-- 主体部分 -->
      <el-row type="flex" justify="space-around" @click.native="isShow=!isShow">
        <el-col :span="6" style="text-align:center">
          <span>{{data.airline_name}} {{data.flight_no}}</span>
        </el-col>
        <el-col :span="12" style="text-align:center">
          <el-row type="flex" justify="space-around">
            <el-col :span="8">
              <el-row type="flex" class="Dailt">
                <strong>{{data.dep_time}}</strong>
                <span>{{data.org_airport_name}}</span>
              </el-row>
            </el-col>
            <i :span="8">
              <el-row type="flex">
                <i class="line">{{getTotalTime}}</i>
              </el-row>
            </i>
            <el-col :span="8">
              <el-row type="flex" class="Dailt">
                <strong>{{data.arr_time}}</strong>
                <span>{{data.dst_airport_name}}</span>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" style="text-align:center">
          ￥
          <span class="orColor">{{data.seat_infos[0].org_settle_price_child}}</span>起
        </el-col>
      </el-row>
    </div>
    <!-- 展开部分 -->
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
      class="flightDetailList"
      v-show="isShow"
    >
      <el-col :span="4" style="font-size:14px;text-align:center">低价推荐</el-col>
      <el-col :span="20">
        <el-row
          type="flex"
          justify="space-between"
          align="middle"
          v-for="(item,index) in data.seat_infos"
          :key="index"
          style="border-bottom:1px solid #eee"
        >
          <el-col :span="12" style="font-size:12px;">
            <i style="color:#4f804f">{{item.group_name}}</i>
            <span>| {{item.supplierName}}</span>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" justify="space-around" align="middle">
              <i style="font-size:20px;color:#e6a23c">￥{{item.org_settle_price}}</i>
              <span>
                <div class="box">选定</div>
                <span class="discount">剩余：{{item.discount}}</span>
              </span>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    // 处理展开的数据信息
    getTotalTime() {
      const depArr = this.data.dep_time.split(':') //出发时间的数组
      const arrArr = this.data.arr_time.split(':')  //到达时间的数组
      if (arrArr[0] < depArr[0]) {
        arrArr[0] += 24;
      }
      const start = depArr[0] * 60 + +depArr[1]
      const end = arrArr[0] * 60 + +arrArr[1]

      // 相隔的分钟
      const dis = end - start
      const hour = Math.floor(dis / 60)
      const min = dis % 60
      return `${hour}时${min}分钟`
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
.flightsItem {
  height: 60px;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
.Dailt {
  flex-direction: column;
  span {
    font-size: 12px;
    color: #999999;
  }
  strong {
    font-weight: normal;
    line-height: 25px;
    font-size: 23px;
  }
}
.line {
  font-size: 14px;
  color: #999;
  height: 28px;
  width: 65px;
  border-bottom: 1px solid #ccc;
}
.orColor {
  color: #e6a23c;
  font-size: 27px;
}
.flightDetailList {
  background-color: #f6f6f6;
}
.box {
  margin: 5px 0;
  width: 65px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
  border-radius: 5px;
  background-color: #e6a23c;
  color: #fff;
}
.discount {
  color: #666;
  font-size: 14px;
}
</style>
