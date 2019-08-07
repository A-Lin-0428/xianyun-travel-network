<template>
  <div class="mian">
    <!-- 搜索框 -->
    <div class="search-wrapper">
      <input type="text" placeholder=" 请输入想去的地方，比如：'广州'" class="search" />
      <i class="el-icon-search"></i>
    </div>
    <!-- 推荐:可跳转关键词 -->
    <div class="search-recommend">
      推荐：
      <span>广州</span>
      <span>上海</span>
      <span>北京</span>
    </div>
    <!-- 推荐攻略 -->
    <div class="post-title el-row is-justify-space-between is-align-middle el-row--flex">
      <h1>推荐攻略</h1>
      <el-button type="primary" icon="el-icon-edit">写游记</el-button>
    </div>

    
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.search-wrapper {
  position: relative;
}
.search {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border: 3px solid orange;
}
.el-icon-search {
  position: absolute;
  top: 8px;
  right: 5px;
  font-size: 24px;
  color: orange;
  font-weight: 700;
  margin-right: 10px;
}
.search-recommend {
  padding: 10px 0;
  font-size: 12px;
  color: #666;
}
.post-title h1 {
  font-weight: 400;
  font-size: 18px;
  color: orange;
}
</style>
