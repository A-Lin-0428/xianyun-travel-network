<template>
  <div class="detailcomment">
    <p class="title" ref="title">评论</p>
    <!-- 回复按钮 -->
    <el-tag
      v-if="comuser.id"
      class="replybtn"
      :disable-transitions="true"
      size="medium"
      @close="cancelreply"
      closable
      type="info"
    >
      <span>回复 @{{comuser.nickname}}</span>
    </el-tag>
    <!-- 文本域 -->
    <el-input
      ref="textarea"
      type="textarea"
      placeholder="说点什么吧..."
      v-model="form.content"
      resize="none"
      :show-word-limit="true"
      maxlength="50"
    ></el-input>
    <!-- 图片和提交按钮 -->
    <el-row type="flex" justify="space-between" class="upload">
      <el-upload
        :on-success="upsuccess"
        :headers="headers"
        :multiple="true"
        class="avatar-uploader"
        action="http://127.0.0.1:1337/upload"
        :before-upload="beforeupload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-button class="submit" type="primary" size="mini" @click="subcomment">提交</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    // 评论按钮
    tocommentpositioninfo: {
      type: String,
      default: ""
    },
    // 回复用户
    replyuser: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      comuser: {},
      // 回复按钮状态
      replybtnstate: false,
      // 图片上传请求头
      headers: {},
      imageUrl: "",
      form: {
        content: "",
        pics: [],
        post: 0
      }
    };
  },
  methods: {
    // 取消回复
    cancelreply() {
      this.replybtnstate = false;
      this.comuser = {};
    },
    // 上传成功
    upsuccess() {
      console.log("uploadsuccess");
    },
    // 提交评论
    subcomment() {
      // 判断是否为空
      if (!this.form.content.trim()) {
        this.$emit("success", "");
        return this.$message.warning("内容不能为空");
      }
      // 判断是否回复
      if (this.comuser.id) this.form.follow = this.comuser.ryid;
      this.form.post = this.$route.query.id;
      var data = this.form;
      // 发送请求
      this.$axios({
        url: '/comments',
        method: 'POST',
        headers: { Authorization: `Bearer ${this.$store.state.user.userInfo.token}` },
        data
      }).then(res => {
        // console.log(res)
        if (res.data.message === "提交成功") {
          //  清空数据
          this.form.content = "",
            this.form.pics = [],
            this.replybtnstate = false;
          this.$emit("success", "ok")
        }
      })
    },
    // 文件上传前
    beforeupload(file) {
      if (!this.$store.state.user.userInfo.token) {
        this.$message.warning("请先登录，正在跳转。。。");
        this.$router.push({ path: "/user?form=login" });
        return false;
      }
      this.headers = {
        Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
      };
    },
    // 定义到评论位置
    commentposition() {
      document.documentElement.scrollTop = this.$refs.title.offsetTop;
      document.body.scrollTop = this.$refs.title.offsetTop;
      this.$refs.textarea.focus();
    }
  },

  // 侦听
  watch: {
    // 回复评论用户信息
    replyuser: {
      deep: true,
      handler(n, o) {
        if (!n.id) return;
        this.comuser = n;
        this.$emit("gryuserinfo", "OK");
        this.replybtnstate = true;
        this.commentposition();
      }
    },
    // 侦听评论按钮
    tocommentpositioninfo(n, o) {
      if (!(n === "OK")) return;
      this.commentposition();
      this.$emit("replytocommentposition", "OK");
    }
  }
};
</script>

<style lang='less' scoped>
.detailcomment {
  // 标题
  .title {
    margin-bottom: 22px;
    font-size: 18px;
    color: #333;
  }
  // 回复
  /deep/ .replybtn {
    margin-bottom: 8px;
    span {
      font-size: 12px;
    }
  }
  // 图片上传和提交按钮
  // 图片上传
  /deep/ .upload {
    margin-top: 10px;
    .avatar-uploader .el-upload {
      background-color: #fbfdff;
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
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
  //   提交按钮
  .submit {
    margin-top: 2px;
    height: 27px;
  }
}
</style>
