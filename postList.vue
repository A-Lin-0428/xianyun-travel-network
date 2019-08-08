<template>
  <div class="mian">
    <!-- 搜索框 -->
    <div class="search-wrapper">
      <input type="text" placeholder="请输入想去的地方，比如：'广州'" class="search" />
      <i class="el-icon-search"></i>
    </div>
    <!-- 推荐:搜索关键词 -->
    <div class="search-recommend">
      <el-row>
        推荐：
        <span>广州</span>
        <span>上海</span>
        <span>北京</span>
      </el-row>
    </div>
    <!-- 推荐攻略 -->
    <el-row type="flex" justify="space-between" align="middle" class="post-title">
      <h1>推荐攻略</h1>
      <el-button type="primary" icon="el-icon-edit">写游记</el-button>
    </el-row>

    <!-- 攻略列表 -->
    <div class="postList" v-for="(item,index) in data" :key="index">
      <!-- 当index不等于1的时候用下面这串结构 -->
      <div v-if="index !==1">
        <el-row type="flex" justify="space-between" class="post-item card" align="middle">
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
            <div>
              <img
                v-for="(items,index) in item.images"
                :key="index"
                :src="items"
                v-show="index < 3"
              />
            </div>
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
            <div>
              <img
                v-for="(items,index) in item.images"
                :key="index"
                :src="items"
                v-show="index < 3"
              />
            </div>
          </nuxt-link>
        </el-row>
        <div>
          <el-row type="flex" justify="space-between" class="post-item card" align="middle">
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

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
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
      city: "",
      total: 0,
      currentPage: 4
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
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
  border-bottom: 1px solid #eee;
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
}
</style>
