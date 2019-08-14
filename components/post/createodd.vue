<template>
  <div class="aside">
    <div class="air-info">
      <p>草稿箱 (0)</p>
      <div class="air-content" v-for="(item,index) in data" :key="index">
        <p>
          {{item.title}}
          <i class="iconfont el-icon-edit"></i>
        </p>
        <p>{{item.newTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  width: 200px;
  height: fit-content;
  border: 1px #ddd solid;
  margin: 20px 0;
  .air-info {
    padding: 15px 0px;
    padding-left: 10px;
    p {
      font-size: 16px;
      color: #74746b;
    }
    .air-content {
      margin-top: 15px;
      p {
        &:first-child {
          font-size: 16px;
          color: #000;
          &:hover {
            cursor: pointer;
            color: #ff9f00;
          }
        }
        &:last-child {
          font-size: 14px;
          color: #9999a6;
        }
      }
    }
  }
}
</style>
