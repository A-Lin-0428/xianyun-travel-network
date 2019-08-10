<template>
  <div class="info">
    <el-row class="info-basic pad">
      <el-col :span="4">基本信息</el-col>
      <el-col :span="20">
        <el-row type="flex" justify="space-between">
          <el-col class="mes">入住时间: {{data.enterTime||'-'}}</el-col>
          <el-col class="mes">离店时间: {{data.leftTime||'-'}}</el-col>
          <el-col class="mes">{{data.creation_time||'-'}} / {{data.renovat_time||'-'}}</el-col>
          <el-col class="mes">酒店规模: {{data.roomCount}}间客房</el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="behavior pad">
      <el-col :span="4">主要设施</el-col>
      <el-col :span="20">
        <!-- 通过设置effect属性来改变主题，默认为 light -->
         <el-tag
          type='info'
          v-for="(item,index) in data.hotelassets"
          :key="index"

        >{{item.name}}</el-tag> 
     </el-col> 
    </el-row>
    <el-row class="stop pad">
      <el-col :span="4">停车服务</el-col>
      <el-col :span="20">
        <span>{{data.parking||'-'}}</span>
      </el-col>
    </el-row>
    <el-row class="brand pad">
      <el-col :span="4">品牌信息</el-col>
      <el-col :span="20"> 
      <span>{{data.hotelbrand.name||'-'}}</span> 
       </el-col> 
    </el-row>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      
    };
  },
  mounted(){
    setTimeout(()=> {
      console.log(this.data)
    },1000)
  }

};
</script>

<style scoped lang='less'>
.pad {
  padding: 20px 10px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.info {
  width: 1000px;
  margin: 20px auto;

  .info-basic {
    .mes {
      flex: 1;
      font-size: 14px;
      justify-content: space-between;
    }
  }
}
</style>
