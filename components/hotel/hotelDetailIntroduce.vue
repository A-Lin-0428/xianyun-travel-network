<template>
  <div class="introduce">
    <!-- 酒店图片展示 -->
    <el-row class="hotel-pics">
      <el-col :span="16" class="main-pic">
        <img :src="showPic" alt />
      </el-col>

      <el-col :span="8" class="pic-right">
        <a href="#">
          <img
            class="list-pic"
            v-for="(item,index) in picsList"
            :key="index"
            @click="handleClick(item)"
            :src="item"
          />
        </a>
      </el-col>
    </el-row>

    <!-- 酒店价格 -->
    <div class="showPrice">
      <div class="header pub-two">
        <el-row>
          <el-col class='pub-one' :span="10" >价格来源</el-col>
          <el-col class='pub-one' :span="10">低价房型</el-col>
          <el-col class='pub-one' :span="4">最低价格/每晚</el-col>
        </el-row>
      </div>
      <div class="content">
        <a href="#" v-for="(item,index) in data.products" :key="index">
          <el-row>
            <el-col class='pub-one pub-two' :span="10">{{item.name}}</el-col>
            <el-col class='pub-one pub-two' :span="10">{{item.bestType}}</el-col>
            <el-col class='pub-one pub-two' :span="4">
              <em class='pub-three'> ¥ {{item.price}}</em> 元起
              <em class='pub-three'>></em>
            </el-col>
          </el-row>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  },

  data() {
    return {
      // 图片数据列表
      picsList: [
        "http://157.122.54.189:9093/images/hotel-pics/1.jpeg",
        "http://157.122.54.189:9093/images/hotel-pics/2.jpeg",
        "http://157.122.54.189:9093/images/hotel-pics/3.jpeg",
        "http://157.122.54.189:9093/images/hotel-pics/4.jpeg",
        "http://157.122.54.189:9093/images/hotel-pics/5.jpeg",
        "http://157.122.54.189:9093/images/hotel-pics/6.jpeg"
      ],
      // 展示图片区域
      showPic: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg",
      
    };
  },
  methods: {
    // 点击小图片触发(在大图盒子里面展示)
    handleClick(item) {
      this.showPic = item;
    }
  },
  mounted() {
    this.$axios({
      url: "http://157.122.54.189:9095/hotels?id=4"
    }).then(res => {});
  }
};
</script>

<style scoped lang='less'>
.introduce {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  .hotel-pics {
    margin-bottom:40px;
    .main-pic {
      > img {
        width: 640px;
        height: 360px;
      }
    }
    .pic-right {
      .list-pic {
        width: 160px;
        margin-bottom: 10px;
        // margin-left:5px;
        &:nth-child(even) {
          margin-left: 12px;
          margin-right: 0;
        }
      }
    }
  }
}
.pub-one {
  font-size: 14px;
  color:#606266;
  padding-left:10px;
}
.pub-two {
  height: 48px;
  line-height: 48px;
  border-bottom:1px solid #eee;
}
.pub-three {
  color:#f90;
}
.header {
  font-size: 18px;
  font-weight: 400;
}
</style>
