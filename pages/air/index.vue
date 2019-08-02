<template>
  <div class="airTicket w">
    <!-- 标题 -->
    <h2>
      <i class="iconfont iconfeiji"></i> 国内机票
    </h2>
    <!-- 内容部分 -->
    <el-row type="flex" justify="space-between" class="airContent">
      <div class="search">
        <el-row type="flex" justify="space-between">
          <span
            v-for="(item,index) in ['单程','往返']"
            :key="index"
            @click=" handleClick(index)"
            :class="{active:current==index}"
          >
            <i v-if="index==0" class="iconfont icondancheng"></i>
            <i v-if="index==1" class="iconfont iconshuangxiang"></i>
            {{item}}
          </span>
        </el-row>
        <!-- 搜索样式部分 -->
        <searchForm />
      </div>
      <div class="market">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
      </div>
    </el-row>
    <!-- 提供的服务部分 -->
    <el-row class="servie">
      <el-col :span="8">
        <span>
          <i class="iconfont iconweibiaoti-_huabanfuben"></i> 100%航协认证
        </span>
      </el-col>
      <el-col :span="8">
        <span>
          <i class="iconfont iconbaozheng"></i> 出行保证
        </span>
      </el-col>
      <el-col :span="8">
        <span>
          <i class="iconfont icondianhua"></i> 7*24小时服务
        </span>
      </el-col>
    </el-row>

    <!-- 特价机票标题 -->
    <h2>
      <i class="iconfont icontejiajipiao"></i>特价机票
    </h2>
    <!-- 特价机票内容部分 -->
    <div class="specialTicket">
      <el-row type="flex" justify="space-between"></el-row>
    </div>
  </div>
</template>
 
<script>
// 引入组件
import searchForm from '@/components/air/searchForm'
export default {
  components: {
    searchForm
  },
  data() {
    return {
      current: 0
    }
  },
  methods: {
    // 点击单程或者往返的时候的效果
    handleClick(index) {
      // console.log(index)
      this.current = index
    }
  }
}
</script>
<style lang="less" scoped>
.airTicket {
  h2 {
    margin: 10px 0;
    color: #ffa500;
    i {
      font-size: 22px;
    }
  }
  .airContent {
    margin-bottom: 30px;
    .search {
      width: 360px;
      height: 350px;
      background-color: #fff;
      border: 1px solid #ddd;
      // /deep/ .el-tabs {
      //   width: 100%;
      // }
      span {
        width: 360/2px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #eee;
      }
      .active {
        background-color: #fff;
        border-top: 5px solid #ffa500;
      }
    }
    .market {
    }
  }
  .servie {
    height: 40px;
    background-color: #eee;
    border: 1px solid #ccc;
    padding: 5px 0;
    margin-bottom: 20px;
    span {
      display: block;
      height: 100%;
      text-align: center;
      border-right: 1px solid #ccc;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>


