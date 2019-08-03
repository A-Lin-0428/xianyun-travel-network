<template>
  <div class="container">
    <div class="flightsItem">
      <!-- 主体部分 -->
      <el-row type="flex" justify="space-around" @click.native="isShow=!isShow">
        <el-col :span="6" style="text-align:center">
          <span>东航 MU5316</span>
        </el-col>
        <el-col :span="12" style="text-align:center">
          <el-row type="flex" justify="space-around">
            <el-col :span="8">
              <el-row type="flex" class="Dailt">
                <strong>20:30</strong>
                <span>白云机场T1</span>
              </el-row>
            </el-col>
            <i :span="8">
              <el-row type="flex">
                <i class="line">2时20分</i>
              </el-row>
            </i>
            <el-col :span="8">
              <el-row type="flex" class="Dailt">
                <strong>22:50</strong>
                <span>虹桥机场T1</span>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" style="text-align:center">
          ￥
          <span class="orColor">810</span>起
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
      <el-col :span="20" style="border-bottom:1px solid #ccc">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="12" style="font-size:12px;">
            <i style="color:#4f804f">经济舱</i>
            <span>| 上海一诺航空服务有限公司</span>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" justify="space-around" align="middle">
              <i style="font-size:20px;color:#e6a23c">￥1345</i>
              <span>
                <div class="box">选定</div>
                <span class="discount">剩余：83</span>
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
  data() {
    return {
      isShow: false
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
  width: 58px;
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
