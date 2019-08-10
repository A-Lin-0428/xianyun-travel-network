<template>
  <div class="pinglun">
    <h4>评论</h4>
    <el-input type="textarea" :rows="2" placeholder="说两句咯!" v-model="textarea"></el-input>
    <div class="el-div">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-button class="el-button" :plain="true" @click="open2">提交评论</el-button>
    </div>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: ""
    };
  },

  methods: {
    open2() {
      // 评论
      this.$message({
        message: "评论成功!",
        type: "success",
        imageUrl: ""
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="less" scoped>
.pinglun {
  width: 700px;
  margin-left: 250px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/deep/ .el-icon-plus {
  border: 1px solid #409eff;
}
.el-div {
  display: flex;
}
.el-button {
  margin-left: 420px;
  height: 50px;
}
</style>


