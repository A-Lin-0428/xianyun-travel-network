<template>
  <div class="container">
    <div class="district">
      <el-row type="flex">
        <el-col :span="4">区域：</el-col>
        <el-col :span="20">
          <a href="#">全部</a>
          <a href="#" v-for="(item,index) in data.scenics" :key="index">{{item.name}}</a>
        </el-col>
      </el-row>
    </div>
    <div class="strategy">
      <el-row type="flex">
        <el-col :span="4">攻略：</el-col>
        <el-col
          :span="20"
        >北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</el-col>
      </el-row>
    </div>
    <div class="price">
      <el-row type="flex">
        <el-col :span="4" class="priceAve">
          <span>
            均价
            <el-tooltip
              class="item"
              effect="dark"
              content="等级均价由平日价格计算得出，节假日价格会有上浮"
              placement="top-start"
            >
              <em>?</em>
            </el-tooltip>
            <i>:</i>
          </span>
        </el-col>
        <el-col :span="20" class="priceSort">
          <el-tooltip
            class="item"
            effect="dark"
            content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
            placement="bottom-start"
            :visible-arrow="false"
          >
            <span>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              ￥332
            </span>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
            placement="bottom-start"
            :visible-arrow="false"
          >
            <span>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              ￥521
            </span>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
            placement="bottom-start"
            :visible-arrow="false"
          >
            <span>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              ￥768
            </span>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  margin-bottom: 40px;
  font-size: 14px;
  color: #666;
  a {
    margin-right: 10px;
    color: inherit;
    &:hover {
      color: #409eff;
      border-bottom: 1px solid #409eff;
    }
    &:active {
      background-color: #eeeeee;
    }
  }
  .district,
  .strategy {
    margin-bottom: 20px;
  }

  .price {
    .priceAve {
      span {
        position: relative;
        em {
          position: absolute;
          top: -4px;
          left: 30px;
          display: inline-block;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          background-color: #cccccc;
          border-radius: 50%;
          font-size: 12px;
          color: #fff;
        }
        i {
          margin-left: 16px;
        }
      }
    }
    .priceSort {
      span {
        margin-right: 30px;
        .iconfont {
          color: #ff9900;
        }
      }
    }
  }
}
</style>
