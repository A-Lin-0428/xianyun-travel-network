<template>
  <div id="container"></div>
</template>
<script>
export default {
  data() {
    return {
      mapkey: '	82120ff3f2bfd41fe4bac0b254d6d9e8'
    }
  },
  mounted() {
    // 异步加载
    window.onLoad = function () {
      var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [118.8718107, 31.32846821],
        zoom: 13
      });
      var marker = new AMap.Marker({
        position: [116.39, 39.9],//位置
        title: '得月楼饭店'

      })
      map.add(marker);//添加到地图
    }
    var url = 'https://webapi.amap.com/maps?v=1.4.15&key=82120ff3f2bfd41fe4bac0b254d6d9e8&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
}
</script>
<style lang="less" scoped>
#container {
  height: 300px;
  width: 100%;
}
</style>
