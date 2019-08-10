<template>
  <div class="container">
    <div class="hotelList">
      <el-row
        type="flex"
        :gutter="30"
        justiy="space-between"
        v-for="(item,index) in data"
        :key="index"
      >
        <el-col :span="8">
          <div class="img">
            <img :src="item.photos" alt />
          </div>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="16">
              <p style="font-size:22px">{{item.name}}</p>
              <p style="color:#999999">
                <span>{{item.alias}}</span>
                <span class="activeColor">
                  <i class="iconfont iconhuangguan"></i>
                  <i class="iconfont iconhuangguan"></i>
                  <i class="iconfont iconhuangguan"></i>
                </span>
                <span>{{item.hoteltype&&item.hoteltype.name}}</span>
              </p>
              <p style="margin:10px 0 ">
                <el-row type="flex" justiy="space-between">
                  <el-col :span="10">
                    <el-rate
                      v-model="item.stars"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    ></el-rate>
                  </el-col>
                  <el-col :span="7">
                    <i class="activeColor">{{item.all_remarks}}</i> 条评论
                  </el-col>
                  <el-col :span="7">
                    <i class="activeColor">{{item.num_collected}}</i> 篇游记
                  </el-col>
                </el-row>
              </p>
              <p style="color:#666;font-size:14px">
                <i class="iconfont iconlocation"></i>
                <span>位于:{{item.address}}</span>
              </p>
            </el-col>
            <el-col :span="8" class="OtherPlatforms">
              <nuxt-link to="#" v-for="(item2,index2) in item.products" :key="index2">
                <el-row type="flex" justify="space-between">
                  <span>{{item2.name}}</span>
                  <span>
                    <i class="activeColor">￥{{item2.price}}</i>起 >
                  </span>
                </el-row>
              </nuxt-link>
              <!-- <nuxt-link to="#">
                <el-row type="flex" justify="space-between">
                  <span>艺龙</span>
                  <span>
                    <i class="activeColor">￥115</i>起 >
                  </span>
                </el-row>
              </nuxt-link>
              <nuxt-link to="#">
                <el-row type="flex" justify="space-between">
                  <span>Hotels.com</span>
                  <span>
                    <i class="activeColor">￥162</i>起 >
                  </span>
                </el-row>
              </nuxt-link>-->
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => { }
    }
  },
  data() {
    return {
      grade: 4.5,
      hotelSearch: {
        city: ''

      }
    }
  },
}

</script>
<style lang="less" scoped>
.container {
  .hotelList {
    padding-bottom: 30px;
    border-bottom: 1px solid #eeeeee;
  }
  .img {
    width: 100%;

    img {
      width: 320px;
      height: 210px;
    }
  }
  .activeColor {
    color: #f7ba2a;
  }

  .OtherPlatforms {
    margin-top: 20px;
    a {
      height: 50px;
      line-height: 50px;
      color: #666;
      border-bottom: 1px solid #666;
    }
  }
}
</style>

