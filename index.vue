<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 侧栏 -->
      <div class="main">
        <postForm />
      </div>

      <!-- 攻略列表 -->
      <div class="aside">
        <postList />
      </div>
    </el-row>
  </div>
</template>

<script>
import postList from "@/components/post/postList";
import postForm from "@/components/post/postForm";
export default {
  components: {
    postList,
    postForm
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
}
</style>
