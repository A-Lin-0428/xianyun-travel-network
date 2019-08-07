<template>
  <div class="tab">
    <div class="tab1">
      <span
        v-for="(item,index) in ['新闻','电影','娱乐']"
        :key="index"
        @click="show(index)"
        :class="{active:current===index}"
      >{{item}}</span>
    </div>
    <div class="new" v-if="current===0">
      <p>新闻1</p>
      <p>新闻1</p>
      <p>新闻1</p>
    </div>
    <div class="movie" v-if="current===1">
      <p>电影1</p>
      <p>电影1</p>
      <p>电影1</p>
    </div>
    <div class="entertainment" v-if="current===2">
      <p>娱乐</p>
      <p>娱乐</p>
      <p>娱乐</p>
    </div>
  </div>
</template>
     
<script>
export default {
  data() {
    return {
      current: 1
    }
  },
  methods: {
    show(index) {
      this.current = index
    }
  }
}
</script>
 
<style>
.tab {
  margin: 100px auto;
}
.tab1 span {
  margin-right: 5px;
  padding: 5px;
  border: 1px solid #000;
}
.active {
  color: red;
  border-color: red;
}
</style>
