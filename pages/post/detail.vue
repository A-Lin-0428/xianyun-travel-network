<template>
  <div class="aa">
    <el-row type="flex" justify="space-between" :gutter="20">
      <div class="strategy-left">
        <!-- 文章详情组件 -->
        <Postdetail :data="postDetail" />
        <!-- 评论详情组件 -->
        <Postcomment />
      </div>

      <div class="strategy-right">
        <RelatedStrategy />
      </div>
    </el-row>
  </div>
</template>
<script>
// 引用组件
import Postdetail from '@/components/post/postdetail'
import Postcomment from '@/components/post/postcomment'
import RelatedStrategy from '@/components/post/relatedStrategy'
export default {
  components: {
    Postdetail, Postcomment, RelatedStrategy
  },
  data() {
    return {
      postDetail: []
    }
  },
  methods: {
    // 文章详情页面数据渲染
    getPostDetail() {
      // 根据id，获取攻略详情
      const { id } = this.$route.query
      // console.log(id)
      this.$axios({
        url: '/posts',
        method: 'GET',
        params: { id }
      }).then(res => {
        // console.log(res)
        this.postDetail = res.data.data
      })
    }
  },
  mounted() {
    //  文章详情数据初始化
    this.getPostDetail()
  },
  watch: {
    // 当子组件中的id发生变化时候，数据需要重新渲染
    $route() {
      // 数据重新重新渲染
      this.getPostDetail()
    }
  }
};
</script>
<style lang="less" scoped>
.aa {
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
}
// 攻略左边开始
.strategy-left {
  width: 700px;
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
.Strategy-content p {
  margin-bottom: 30px;
}
.Strategy-content img {
  width: 700px;
  height: 341px;
}
.Strategy-content .zhuxi {
  color: #989894;
  margin-bottom: 20px;
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


