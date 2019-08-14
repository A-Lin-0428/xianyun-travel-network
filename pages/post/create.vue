<template>
  <div class="container w">
    <el-row type="flex" justify="space-between">
      <!-- 发表攻略 -->
      <CreateAdd @getAddPost="getAddPost" />

      <!-- 侧边栏 -->
      <CreateOdd :data="addPostCont" />
    </el-row>
  </div>
</template>
<script>
import CreateAdd from '@/components/post/createadd'
import CreateOdd from '@/components/post/createodd'
export default {
  data() {
    return {
      addPostCont: []
    }
  },
  components: {
    CreateAdd,
    CreateOdd
  },
  methods: {
    // 获取写文章的数据
    getAddPost(addPost) {
      const arr = [...this.addPostCont]
      arr.push(addPost)
      this.addPostCont = arr
    }
  }

}
</script>

<style lang="less" scoped>
.container {
}
</style>
