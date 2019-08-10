<template>
  <div class="container">
    <!-- 首页轮播图样式 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in option" :key="index" style="height:700px">
        <div
          class="banner-image"
          :style="`
                background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat;
                background-size:contain contain;
                `"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索框布局样式 -->
    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item, index) in  content"
            :key="index"
            :class="{active:current==index}"
            @click="handleTab(index)"
          >
            <i>{{item.name}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input
            :placeholder="content[current].placeholder"
            v-model="searchValue"
            @keyup.enter="searchSubmit"
          />
          <i class="el-icon-search" @click="searchSubmit"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: [],
      total: '',
      content: [
        { name: '攻略', placeholder: '搜索城市' },
        { name: '酒店', placeholder: '请输入城市搜索酒店' },
        { name: '机票', placeholder: '' }
      ],
      searchValue: '',
      current: 0

    }
  },
  methods: {
    handleTab(index) {
      if (index === 2) {
        this.$router.push('/air')
      }
      this.current = index
    },
    // 点击搜索，跳转到指定的页面
    searchSubmit() {
      // console.log(123)
      if (this.current == 0) {
        this.$router.push({
          path: '/post',
          query: { city: this.searchValue }
        })
      } else if (this.current == 1) {
        this.$router.push({
          path: '/hotel',
          query: { city: this.searchValue }
        })
      }

    }
  },
  mounted() {
    //  发送轮播图的数据请求
    this.$axios({
      url: '/scenics/banners'
    }).then(res => {
      // console.log(res)
      this.option = res.data.data
      this.total = res.data.total
      // console.log(this.option)


    })
  }

}
</script>
<style lang="less" scoped>
.container {
  // height: 700px;
  /deep/ .el-carousel__container {
    height: 700px !important;
  }
}
.banner-image {
  width: 100%;
  height: 700px;
}
.banner-content {
  z-index: 9;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -500px;
  border-top: 1px transparent solid;

  .search-bar {
    width: 552px;
    margin: 0 auto;
  }

  .search-tab {
    .active {
      i {
        color: #333;
      }
      &::after {
        background: #eee;
      }
    }

    span {
      width: 82px;
      height: 36px;
      display: block;
      position: relative;
      margin-right: 8px;
      cursor: pointer;

      i {
        position: absolute;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
      }

      &:after {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        border: 1px rgba(255, 255, 255, 0.2) solid;
        border-bottom: none;
        transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
        transform-origin: bottom left;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1px 2px 0 0;
        box-sizing: border-box;
      }
    }
  }

  .search-input {
    width: 550px;
    height: 46px;
    background: #fff;
    border-radius: 0 4px 4px 4px;
    border: 1px rgba(255, 255, 255, 0.2) solid;
    border-top: none;
    box-sizing: unset;

    input {
      flex: 1;
      height: 20px;
      padding: 13px 15px;
      outline: none;
      border: 0;
      font-size: 16px;
    }

    .el-icon-search {
      cursor: pointer;
      font-size: 22px;
      padding: 0 10px;
      font-weight: bold;
    }
  }
}
</style>

