<template>
  <div class="aa">
    <div class="strategy-left" v-for="(item,index) in data" :key="index">
      <span>旅游攻略</span>
      / 攻略详情
      <h2>{{item.title}}</h2>
      <hr />
      <div class="Strategy-of-time">
        <p>攻略：2019-05-22 10:57 阅读：{{item.watch}}</p>
      </div>
      <div class="Strategy-content">
        <p v-html="item.content"></p>
      </div>
      <div class="strategy-like">
        <div data-v-741ea8d8 class="post-ctrl">
          <div data-v-741ea8d8 class="el-row is-justify-center el-row--flex">
            <div data-v-741ea8d8 class="ctrl-item">
              <i data-v-741ea8d8 class="iconfont iconpinglun"></i>
              <p data-v-741ea8d8>评论(100)</p>
            </div>
            <div data-v-741ea8d8 class="ctrl-item">
              <i data-v-741ea8d8 class="iconfont iconstar1"></i>
              <p data-v-741ea8d8>收藏</p>
            </div>
            <div data-v-741ea8d8 class="ctrl-item">
              <i data-v-741ea8d8 class="iconfont iconfenxiang"></i>
              <p data-v-741ea8d8>分享</p>
            </div>
            <div data-v-741ea8d8 class="ctrl-item">
              <i data-v-741ea8d8 class="iconfont iconding"></i>
              <p data-v-741ea8d8>点赞(42)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  }
};
</script>
<style lang="less" scoped>
.aa {
  width: 1000px;
  margin: 0 auto;
}
// 攻略左边开始
.strategy-left {
  width: 700px;
  margin-right: 0;
}

.strategy-left span {
  margin-bottom: 50px;
  color: #22609c;
}
.strategy-left h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.Strategy-of-time {
  height: 60px;
  p {
    color: #989894;
    float: right;
    margin-top: 15px;
  }
}
/deep/.Strategy-content {
  img {
    max-width: 700px !important;
  }
}

.strategy-comment {
  margin: 0 auto;
}
// 攻略左边结束
// 右边开始
.strategy-right {
  float: right;
  width: 300px;
}
.strategy-like {
  color: #ffa500;
  margin-top: 50px;
  margin-bottom: 30px;
  i {
    font-size: 30px;
  }
}
.ctrl-item {
  margin-top: 50px;
  margin: 0 auto;
}
</style>


