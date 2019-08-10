<template>
  <div class="map">
    <div class="map-box">
      <!-- 创建地图(图标) -->
      <div class="map-detail">
        <div id="container"></div>
      </div>

      <!-- 右边tab栏 -->
      <div class="map-tab">
        <!-- tab栏头部 -->
        <div class="tab-header">
          <el-row type="flex" class="tabs">
            <!-- 绑定一个class,当点击tab栏时高亮 -->
            <span
              v-for="(item,index) in tabs"
              :key="index"
              @click="handleClick(index)"
              :class="{active:current===index}"
            >
              <i :class="item.icon" class="icon"></i>
              {{item.name}}
            </span>
          </el-row>
        </div>
        <!-- tab栏对应的内容 -->
        <div class="tab-content">
          <!-- 风景 -->       
          <el-row class="view" v-if='current===0'
          v-infinite-scroll="load" style="overflow:auto">
            <ul class='view-ul'>
              <li type='flex' justify='space-between' class='view-list'
              v-for='(item,index) in data.scenic' :key='index'>
                <span class="view-name">{{item.name}}</span>
                <span class="view-distance">{{item.province}}</span>
              </li>
            </ul>
          </el-row>
          <!-- <el-row class="transport" v-if='current===1'>
            <ol>
              <li>
                <span class="transport-name">甘霖路口(公交站)</span>
                <span class="transport-distance">0.09公里</span>
              </li>
            </ol>
          </el-row> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data:{
      type:Object,
      defalut:{
        scenic:[],
        location:{}
      }
    }
  },

  data() {
    return {
      // showTable:0,
      active: false,
      current: 0,
      // tab栏头数据
      tabs: [
        {
          icon: "iconfont el-icon-location",
          name: "风景"
        },
        {
          icon: "iconfont el-icon-truck",
          name: "交通"
        }
      ]
    };
  },
  mounted() {
    // 再执行加载这里面的
    window.onLoad = function() {
      // 第一个参数为放地图的容器
      // 第二个参数为给地图设置中心点、级别、显示模式、自定义样式等属性
      var map = new AMap.Map("container", {
        zoom: 11, //级别(地图放大的级别)
        center: [118.8718107, 31.32846821], //中心点坐标(天安门的坐标)
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "好来阁商务宾馆"
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    };
    // 先执行这下面的
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=191ec449215c5162db9bd32faa892dae&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  },
  methods: {
    load(){},
    //  点击切换栏头部触发
    handleClick(index) {
      if(index===1){
        this.$alert('暂时不支持交通显示功能','提示',{
          type:'warning'
        })
      }
      this.current = index;
    }
  }
};
</script>

<style scoped lang='less'>
// 地图样式
#container {
  width: 100%;
  height: 100%;
}

.map {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  .map-box {
    display: flex;
    height: 360px;
    .map-detail {
      width: 650px;
      height: 360px;
    }
    .map-tab {
      margin-left:10px;
      .tab-header {
        border-bottom: 2px solid #ddd;
      }
      .tab-content {
        width: 350px;
      }
    }
  }
}
.tabs {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 3px;
    font-size: 26px;

    &:first-child {
      font-size: 20px;
    }
  }
}
.view-ul {
  height: 300px;
}
.view-list {
  display:flex;
  
  padding:0 20px 20px 10px;
  overflow:auto;
  justify-content:space-between;
}
.view-name {
 
  font-size:14px;
  color:#666;
}
.view-distance{
 
  font-size:14px;
  color:#666;
}
</style>
