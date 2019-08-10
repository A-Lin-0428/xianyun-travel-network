<template>
<<<<<<< HEAD
    
=======
  <div class="menus-wrapper">
    <div class="meus-header" @mouseleave="handleMouseOut">
      <div class="menus-body" v-for="(item,index) in cityData" :key="index">
        <!-- 一级菜单 -->
        <div class="menu-item" @mouseover="handleMousEenter(index)">
          <span>{{item.type}}</span>
        </div>
        <!-- 二级菜单 -->
        <div class="item-child" v-if="isShow">
          <div v-for="(child,index) in childCityData" :key="index" >
            <p>{{index+1}}</p>
            <nuxt-link :to="`/post?city=${child.city}`">
              <span class="childCity">{{child.city}}</span>
            </nuxt-link>
            <nuxt-link :to="`/post?city=${child.city}`">
              <span class="childDesc">{{child.desc}}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="aside-recommend">
      <h4 class="aside-title">推荐城市</h4>
      <nuxt-link to class="aside-img">
        <img
          src="http://p1-q.mafengwo.net/s11/M00/B4/92/wKgBEFt6ZqaAJeK7AAbj58wpNlY06.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
          alt
        />
      </nuxt-link>
    </div>
  </div>
>>>>>>> cb43a18bbacb40a802260e6fce6bfb6e447e4c9e
</template>

<script>
export default {
<<<<<<< HEAD

}
</script>

<style>

=======
  data() {
    return {
      childrenShow: "",
      type: "", // 主题类型
      children: [], // 城市列表分支
      cityData: [], //用来存储热门城市列表数据
      recomdata: [], //用来存储推荐文章数据
      childCityData: [], //用来存储热门城市列表第二菜单数据
      isShow: false
    };
  },
  methods: {
    handleMousEenter(index) {
      this.isShow = true;
      this.childCityData = this.cityData[index].children;
    },
    handleMouseOut() {
      this.isShow = false;
    },
    //获取热门城市菜单列表数据
    getCities() {
      this.$axios({
        url: "/posts/cities",
        method: "GET",
        params: {
          type: "", // 主题类型
          children: [] // 城市列表
        }
      }).then(res => {
        this.cityData = res.data.data;
        console.log(this.cityData, "侧栏热门城市列表数据");
      });
    },
    //获取推荐文章数据
    getRecomment() {
      this.$axios({
        url: "/posts/recommend",
        methods: "GET",
        params: {
          id: "" //Number类型
        }
      }).then(res => {
        this.recomdata = res.data.data;
        console.log(this.recomdata, "推荐文章数据");
      });
    }
  },
  mounted() {
    this.getCities();
    this.getRecomment();
  }
};
</script>

<style>
.menus-wrapper {
  position: relative;
  width: 260px;
}
.menus-body {
  width: 260px;
  /* border-right: none; */
  /* border-bottom: none; */
  box-shadow: 0 0 1px #f5f5f5;
}
.menus-wrapper .menu-item {
  height: 40px;
  line-height: 40px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
  background: #fff;
  z-index: 11;
  position: relative;
}*
.menus-wrapper .menu-item:nth-child(1) {
  border-top: 1px solid #ddd;
}
.menus-wrapper .menu-item:hover {
  border-right: none;
}
.menus-wrapper .menu-item:hover span {
  color: #ffa500;
}
.menu-item::after {
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  border-right: 1px solid #999;
  border-top: 1px solid #999;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 20px;
  top: 15px;
}
.menus-wrapper .menu-item:hover::after {
  border-right: 1px solid #ffa500;
  border-top: 1px solid #ffa500;
}
.menus-wrapper .menu-item span:hover {
  border-right-color: #fff;
  color: orange;
}
.aside-recommend {
  margin-top: 20px;
}
.aside-title {
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}
.aside-img img {
  width: 100%;
  display: block;
}
.item-child {
  position: absolute;
  top: 0;
  width: 350px;
  padding: 10px 20px;
  left: 100%;
  margin-left: -1px;
  border: 1px solid #ddd;
  background: #fff;
  z-index: 10;
}
.item-child p {
  display: inline-block;
  color: orange;
  font-size: 24px;
  font-style: italic;
}
.item-child .childCity {
  color: orange;
  font-size: 16px;
  margin: 0px 10px;
}
.item-child .childDesc {
  color: #999;
  font-size: 14px;
}
.item-child :hover .childDesc {
  border-bottom: 1px solid #999;
}
>>>>>>> cb43a18bbacb40a802260e6fce6bfb6e447e4c9e
</style>
