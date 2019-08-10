<template>
  <div class="mian">
    <!-- 搜索框 -->
    <div class="search-wrapper">
      <input type="text" placeholder="请输入想去的地方，比如：'广州'" class="search" v-model="search" />
      <i class="el-icon-search"></i>
      <!-- 推荐:关键词 -->
      <div class="search-recommend">
        <el-row>
          推荐：
          <span>广州</span>
          <span>上海</span>
          <span>北京</span>
        </el-row>
      </div>
    </div>

    <!-- 推荐攻略 -->
    <el-row type="flex" justify="space-between" align="middle" class="post-title">
      <h1>推荐攻略</h1>
      <nuxt-link to="/post/create">
      <el-button type="primary" icon="el-icon-edit" >写游记</el-button>
      </nuxt-link>
    </el-row>

    <!-- 攻略列表 -->
    <div class="postList" v-for="(item,index) in data" :key="index">
      <!-- 当index不等于1的时候用下面这串结构 -->
      <div v-if="index !==1">
        <el-row type="flex" justify="space-between" class="post-item" align="middle">
          <h3>
            <nuxt-link to="/post/detail?id=4">
              <div v-html="item.title"></div>
            </nuxt-link>
          </h3>
        </el-row>
        <el-row type="flex" justify="space-between" class="post-desc">
          <nuxt-link to="/post/detail?id=4">{{item.summary}}</nuxt-link>
        </el-row>
        <el-row class="card-images" type="flex" justify="space-between">
          <nuxt-link to="/post/detail?id=4">
            <img v-for="(items,index) in item.images" :key="index" :src="items" v-show="index < 3" />
          </nuxt-link>
        </el-row>
        <!-- 用户信息栏 -->
        <div class="post-info" type="flex" justify="space-between">
          <!-- 左边 -->
          <el-row class="post-info-left">
            <el-col :span="2">
              <span>
                <i class="el-icon-location-outline">{{item.cityName}}</i>
              </span>
            </el-col>
            <el-row class="post-user" type="flex" justify="space-between">
              <span>&nbsp;&nbsp;by</span>
              <el-col :span="2">
                <nuxt-link to="/post/detail?id=4">
                  <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
                </nuxt-link>
              </el-col>
              <nuxt-link class="post-username" to>{{item.account.nickname}}</nuxt-link>
              <el-col>
                <span>
                  &nbsp;&nbsp;
                  <i class="el-icon-view">5644</i>
                </span>
              </el-col>
              <!-- 右边 点赞 -->
              <el-col :span="4">
                <span class="post-info-right">42 赞</span>
              </el-col>
            </el-row>
          </el-row>
        </div>
      </div>

      <!-- 当index等于1的时候用下面这串结构 -->
      <div v-if="index==1" class="postList1">
        <el-row class="card-images" type="flex" justify="space-between">
          <nuxt-link to="/post/detail?id=4">
            <img v-for="(items,index) in item.images" :key="index" :src="items" v-show="index < 1" />
          </nuxt-link>
        </el-row>
        <div>
          <el-row type="flex" justify="space-between" class="post-item" align="middle">
            <h3>
              <nuxt-link to="/post/detail?id=4">
                <div v-html="item.title"></div>
              </nuxt-link>
            </h3>
          </el-row>
          <el-row type="flex" justify="space-between" class="post-desc">
            <nuxt-link to="/post/detail?id=4">{{item.summary}}</nuxt-link>
          </el-row>
          <!-- 用户信息栏 -->
          <div class="post-info" type="flex" justify="space-between">
            <!-- 左边 -->
            <el-row class="post-info-left">
              <el-col :span="2">
                <span>
                  <i class="el-icon-location-outline" style="width:65px;">{{item.cityName}}</i>
                </span>
              </el-col>
              <el-row class="post-user" type="flex" justify="space-between">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by</span>
                <el-col :span="2">
                  <nuxt-link to="/post/detail?id=4">
                    <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
                  </nuxt-link>
                </el-col>
                <nuxt-link class="post-username" to>{{item.account.nickname}}</nuxt-link>
                <el-col>
                  <span>
                    &nbsp;&nbsp;
                    <i class="el-icon-view">5644</i>
                  </span>
                </el-col>

                <!-- 右边 点赞 -->
                <el-col :span="4">
                  <span class="post-info-right">42 赞</span>
                </el-col>
              </el-row>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //props传值  接收父组件传递过来的数据
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // city: "",
      // cityName: ""
      search: ""
    };
  },
  methods: {
    //获取搜索框内容
    getSearch(val) {
      let search = val;
      // 设置一个空的数组,用于存储过滤后的数据
      let arr = [];
      // 遍历data数据
      for (let i = 0; i < this.data.length; i++) {
        // 只有data数据的第i个indexof有输入框输入的东西的时候才进来
        if (
          this.data[i].summary.indexOf(search) !== -1 ||
          this.data[i].title.indexOf(search) !== -1
        ) {
          arr.push(this.data[i]);
        }
      }
      this.data = arr;
    },
    //获取文章点赞数据
    getPostLike() {
      this.$axios({
        url: "/posts/like",
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.$store.state.post.postInfo.token}`
        }
      }).then(res => {
        console.lg(res, "文章点赞数据");
        this.$store.commit("post/getPostInfo", res.data);
      });
    }
  },
  watch: {
    // 把val传过去搜索框
    search: function(val) {
      console.log(val, "搜索内容");
      // 只有在输入框输入东西的时候才会运行
      if (val !== "") {
        this.getSearch(val);
      }
      // 判断有没有输入关键字,如果有在所有数据中筛选,每个元素是否有关键字,没有则显示所有数据
      // this.data = this.search
      //   ? this.data.filter(item => item.summary.includes(this.search))
      //   : this.data;
    }
  },
  mounted() {
    // this.getPostLike();
  }
};
</script>

<style scoped lang="less">
.search-wrapper {
  position: relative;
}
.search {
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border: 3px solid orange;
  outline: none;
}
.el-icon-search {
  position: absolute;
  top: 8px;
  right: 5px;
  font-size: 24px;
  color: orange;
  font-weight: 700;
  margin-right: 10px;
}
.search-recommend {
  padding: 10px 0;
  font-size: 12px;
  color: #666;
}
.post-item {
  margin: 10px 0;
  font-size: 16px;
}
.post-item h3 :hover {
  color: orange;
}
.post-title h1 {
  font-weight: 400;
  font-size: 20px;
  color: orange;
  padding: 10px 0;
}
a {
  text-decoration: none;
  color: inherit;
}
.card-images img {
  width: 220px;
  height: 150px;
  margin: 0 12px 0 0px;
}
.post-desc {
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: 14px;
  height: 63px;
  overflow: hidden;
}
.card-images {
  height: 150px;
  display: block;
  margin: 15px 0;
}
.post-info {
  width: 100%;
  padding: 0 0 20px 0;
}
.post-info-left {
  font-size: 14px;
  color: #999;
}
.post-info-right {
  color: orange;
}
.post-user img {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  margin: 0 1px 0 5px;
}
.post-user a {
  color: orange;
}
.post-username {
  width: 130px;
}
.postList1 {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
</style>
