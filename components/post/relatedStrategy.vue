<template>
  <div class="contaniner">
    <h4>相关攻略</h4>
    <div class="content" v-for="(item,index) in relateStrategy" :key="index">
      <nuxt-link :to="`/post/detail?id=${item.id}`">
        <el-row type="flex" :gutter="20">
          <div class="content-img">
            <img :src="item.img" alt />
          </div>
          <div class="content-intor">
            <p>{{item.title}}</p>
            <p>{{item.time}} 阅读{{item.browse}}</p>
          </div>
        </el-row>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      relateStrategy: [
        { id: 711, img: 'https://p3-q.mafengwo.net/s13/M00/41/C4/wKgEaVyaOs2AA9IKAAj8Lg2YzaU64.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90', title: '123', time: '2019-08-12 1:06', browse: 4 },
        { id: 713, img: 'http://157.122.54.189:9095/uploads/44850db01e1748b3b995d0e4f707ad9c.jpeg', title: '你好halo', time: '2019-08-12 1:06', browse: 7 },
        { id: 714, img: 'http://b3-q.mafengwo.net/s13/M00/FF/47/wKgEaVzMTOCAHX9_AAnidFWU9K466.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90', title: '天气好', time: '2019-08-12 1:06', browse: 4 },
        { id: 715, img: 'http://p4-q.mafengwo.net/s13/M00/02/39/wKgEaVzMTgKALFi5AAaKsyezLBE34.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90', title: '好空调，格力造', time: '2019-08-12 1:06', browse: 4 }
      ]
    }
  }
};
</script>
<style lang="less" scoped>
.contaniner {
  h4 {
    padding: 10px 0;
    font-weight: normal;
    font-size: 18px;
    border-bottom: 1px solid #dddddd;
  }
  .content {
    padding: 15px 10px;
    border-bottom: 1px solid #dddddd;
    .content-img {
      img {
        width: 100px;
        height: 80px;
        background: #ddd;
        border: 1px solid #dddddd;
      }
    }
    .content-intor {
      margin-left: 10px;
      p {
        &:nth-child(2) {
          margin-top: 40px;
          font-size: 12px;
          color: #9b9d9e;
        }
      }
    }
  }
}
</style>


