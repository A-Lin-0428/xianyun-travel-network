<template>
  <div class="aside">
    <div class="air-info">
      <p>草稿箱 (0)</p>
      <p>
        伪润体乳
        <i class="iconfont el-icon-edit"></i>
      </p>
      <p>2019-08-14</p>
    </div>
  </div>
</template>

<script>
export default {

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
      &:first-child {
        margin-bottom: 15px;
        font-size: 16px;
        color: #74746b;
      }
      &:nth-child(2) {
        font-size: 16px;
        color: #000;
      }
      &:nth-child(3) {
        font-size: 14px;
        color: #9999a6;
      }
    }
  }
}
</style>
