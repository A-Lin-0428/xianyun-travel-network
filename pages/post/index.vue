<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 侧栏 -->
      <div class="main"></div>

      <!-- 攻略列表 -->
      <div class="aside">
        <postList />
      </div>
    </el-row>
  </div>
</template>

<script>
import postList from "@/components/post/postList";

export default {
  components: {
    postList
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 700px;
  height: fit-content;
  // border: 1px #ddd solid;
  // background: #333;
}
</style>
