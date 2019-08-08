<template>
  <div class="container">
    <div class="hotelList">
      <el-row type="flex" :gutter="30" justiy="space-between">
        <el-col :span="8">
          <img
            src="https://p1.meituan.net/deal/e8d242e373ae75ba506f8c5c7551214b122663.jpg%40700w_700h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
            alt
          />
        </el-col>
        <el-row :span="16">
          <el-row>
            <el-col :span="16">
              <p style="font-size:22px">7天连锁酒店（南京中山陵光华路店）</p>
              <p style="color:#999999">
                <span>7 tian lian suo hotel (nan jing zhong shan ling guang hua lu dian)</span>
                <span class="activeColor">
                  <i class="iconfont iconhuangguan"></i>
                  <i class="iconfont iconhuangguan"></i>
                  <i class="iconfont iconhuangguan"></i>
                </span>
                <span>经济型</span>
              </p>
              <p style="margin:10px 0 ">
                <el-row type="flex" justiy="space-between">
                  <el-col :span="10">
                    <el-rate
                      v-model="grade"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    ></el-rate>
                  </el-col>
                  <el-col :span="7">
                    <i class="activeColor">96</i> 条评论
                  </el-col>
                  <el-col :span="7">
                    <i class="activeColor">63</i> 篇游记
                  </el-col>
                </el-row>
              </p>
              <p style="color:#666;font-size:14px">
                <i class="iconfont iconlocation"></i>
                <span>位于: 光华路114号金弘基大厦院内(近苜蓿园大街南)</span>
              </p>
            </el-col>
            <el-col :span="8" class="OtherPlatforms">
              <nuxt-link to="#">
                <el-row type="flex" justify="space-between">
                  <span>携程</span>
                  <span>
                    <i class="activeColor">￥114</i>起 >
                  </span>
                </el-row>
              </nuxt-link>
              <nuxt-link to="#">
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
              </nuxt-link>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      grade: 4.5
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  .hotelList {
    padding-bottom: 30px;
    border-bottom: 1px solid #eeeeee;
  }
  img {
    width: 100%;
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

