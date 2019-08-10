<template>
  <div class="footer">
    <el-row>
      <h4>0条真实用户评论</h4>
      <el-row class="footer-content">
        <el-col :span="4">
          <p>总评数：{{data.hotelList.all_remarks}}</p>
          <p>好评数：{{data.hotelList.very_good_remarks}}</p>
          <p>差评数：{{data.hotelList.very_bad_remarks}}</p>
        </el-col>
        <!-- 评价 -->
        <el-col :span="20">
          <el-row>
            <el-col :span="8">
              <el-row class="recommendation">
                <!-- 评分系统(element-ui) -->
                <el-rate
                  v-model="data.hotelList.stars"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}分"
                ></el-rate>
                <div class="seal">推荐</div>
              </el-row>
            </el-col>
            <el-col :span="16">
              <el-row type="flex" align="middle" class="service">
                <el-col>
                  <!-- element-ul里面的进度条,参数在里面有介绍 -->
                  <el-progress
                    type="circle"
                    :percentage="data.pc_environment"
                    :text-inside="true"
                    :width="74"
                    :stroke-width="2"
                    color="#fea241"
                  ></el-progress>
                  <div class="text">
                    <em>环境</em>
                    <br />
                    <em>{{data.hotelList.scores.environment}}</em>
                  </div>
                </el-col>
                <el-col>
                  <el-progress
                    type="circle"
                    :percentage="data.pc_product"
                    :text-inside="true"
                    :width="74"
                    :stroke-width="2"
                    color="#fea241"
                  ></el-progress>
                  <div class="text">
                    <em>产品</em>
                    <br />
                    <em>{{data.hotelList.scores.product}}</em>
                  </div>
                </el-col>
                <el-col>
                  <el-progress
                    type="circle"
                    :percentage="data.pc_service"
                    :text-inside="true"
                    :width="74"
                    :stroke-width="2"
                    color="#fea241"
                  ></el-progress>
                  <div class="text">
                    <em>服务</em>
                    <br />
                    <em>{{data.hotelList.scores.service}}</em>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
.footer {
  width: 1000px;
  margin: 0 auto;
  .footer-content {
    padding: 20px 0;
    color: #666;
    box-sizing: bordr-box;

    .footer-grade {
      text-align: center;
      height: 74px;
      line-height: 74px;
    }
  }
}
.recommendation,
.service {
  position: relative;
  height: 74px;
  em {
    color: #fea241;
  }
  .seal {
    position: absolute;
    top: 0;
    transform: rotate(315deg);
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 30px;
    color: #fee5c3;
    border: 2px solid #fee5c3;
    border-radius: 50%;
  }
  /deep/.el-rate {
    position: absolute;
    z-index: 2;
    height: 70px;
    line-height: 70px;
    // text-align: center;
    /deep/.el-rate__item{
      margin-top:7px;
    }
    
  }
  div {
    position: relative;
    .text {
      position: absolute;
      top: 15px;
      left: 20px;
      text-align: center;
      color: #fea241;
      em {
        font-size: 16px;
      }
    }
  }
}
</style>
