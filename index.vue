<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <postList />
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
</style>
