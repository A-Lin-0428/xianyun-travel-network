<template>
  <div class="container">
    <div class="asideSerive">
      <el-row>
        <el-col :span="8" align="center">
          <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409eff"></i>
          <p>航协认证</p>
        </el-col>
        <el-col :span="8" align="center">
          <i class="iconfont iconbaozheng" style="color:green"></i>
          <p>出行保证</p>
        </el-col>
        <el-col :span="8" align="center">
          <i class="iconfont icondianhua" style="color:#409eff"></i>
          <p>7X24</p>
        </el-col>
      </el-row>
      <span>免费客服电话：400634678转2</span>
    </div>
    <div class="asideHistory">
      <div class="historyTitle">
        <h4>历史查询</h4>
      </div>
      <div class="historyList">
        <el-row type="flex" justify="space-between">
          <div class="content">
            <p>上海-广州</p>
            <p>2019-08-03</p>
          </div>
          <el-button type="warning">选择</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.container {
  // width: 359px;
  margin-top: 30px;
  .asideSerive {
    width: 100%;
    height: 97px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    padding: 10px 0;
    .iconfont {
      font-size: 40px;
    }
    p {
      font-size: 14px;
    }
    span {
      display: block;
      width: 100%;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      margin-top: 10px;
      padding-left: 5px;
      background-color: #f6f6f6;
    }
  }
  .asideHistory {
    padding: 5px;
    width: 100%;
    border: 1px solid #ddd;
    .historyTitle {
      border-bottom: 1px solid #ddd;
      h4 {
        font-weight: normal;
        height: 35px;
        line-height: 35px;
      }
    }
    .historyList {
      /deep/ .el-button {
        margin-top: 20px;
        height: 20px;
        padding: 2px 8px !important;
      }
      .content {
        p {
          &:first-child {
            line-height: 35px;
          }
          &:nth-child(2) {
            color: #6a6a6a;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>

