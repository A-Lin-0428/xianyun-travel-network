<template>
     <div class="container w">
        <el-row type="flex" justify="space-between">
            <!-- 发表攻略 -->
            <CreateAdd/>

            <!-- 侧边栏 -->
           <CreateOdd/>
        </el-row>
    </div>
</template>
<script>
import CreateAdd from '@/components/post/createadd'
import CreateOdd from '@/components/post/createodd'
export default {
  components:{
    CreateAdd,
    CreateOdd
  }
  
}
</script>

<style lang="less" scoped>

</style>
