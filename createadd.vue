<template>
<div class="container">
  <div class="left">
    <span>发表新攻略</span>
    <p>分享你的个人游记,让更多人看到你哦！</p>
  </div>
  <el-row>
    <el-input v-model="input" placeholder="请输入标题" class="List">
    </el-input>
    <div class="scntainers" xmlns:v-quill="富文本编辑器">
      <div class="quill-editor" :content="content" @change="onEditorChange($event)" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)" v-quill:myQuillEditor="editorOption">

      </div>
    </div>
    <div class="el-form-item__content">
      <div data-v-a7cc81fa="" class="el-form-item"><label class="el-form-item__label">选择城市</label>
        <div class="el-form-item__content">
          <div data-v-a7cc81fa="" aria-haspopup="listbox" role="combobox" aria-owns="el-autocomplete-3440" class="el-autocomplete el-autocomplete" aria-expanded="true">
            <div class="el-input">
              <!----><input type="text" placeholder="请搜索游玩城市" fetchsuggestions="function () { [native code] }" triggeronfocus="true" debounce="300" placement="bottom-start" popperappendtobody="true" class="el-input__inner" role="textbox" aria-autocomplete="list" aria-controls="id" aria-activedescendant="el-autocomplete-3440-item--1">
              <!---->
              <!---->
              <!---->
            </div>
          </div>
          <!---->
        </div>
      </div>
      <!---->
    </div>
    <div class="right">
      <el-button class="anl" type="primary" @click="handleanl">发布</el-button>
      <span>或者<a href="javacript:;"> 保存到草稿</a></span>

    </div>

  </el-row>

</div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      content: '',
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
            // ["blockquote", "code-block"], // 引用  代码块
            [{
              header: 1
            }, {
              header: 2
            }], // 1、2 级标题
            //  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
            //  [{ script: "sub" }, { script: "super" }], // 上标/下标
            //  [{ indent: "-1" }, { indent: "+1" }], // 缩进
            //  [{'direction': 'rtl'}],                         // 文本方向
            //  [{ size: ["small", false, "large", "huge"] }], // 字体大小
            //  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            //  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            //  [{ font: [] }], // 字体种类
            //  [{ align: [] }], // 对齐方式
            //  ["clean"], // 清除文本格式
            ["link", "image", "video"] // 链接、图片、视频
          ],
        
        }
      }
    }
  },
  mounted() {
    // console.log('app init, my quill insrance object is:', this.myQuillEditor)
    setTimeout(() => {
      this.content = 'i am changed'
    }, 3000)
  },
  methods: {
    onEditorBlur(editor) {
      //失去焦点事件
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      //获得焦点事件
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    onEditorChange({
      editor,
      html,
      text
    }) {
      //内容改变事件
      // console.log('editor change!', editor, html, text)
      this.content = html
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 提交
    handleanl() {
      this.$axios({
          url: '/upload',
          method: 'GET',
          params,
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
}
</script>

<style lang="less" scoped>
.container {
  width: 735px;
  margin: 20px 0 0 0;

  .left {
    // width: 735px;

    span {
      font-size: 20px;
      margin-bottom: 15px;
    }

    p {
      margin: 8px 0;
      font-size: 12px;
      color: #ccc;
    }

  }

  .List {
    margin: 20px 0;
  }

  .containers {

    width: 70%;

    max-width: 700px;

    margin: 0 auto;

    padding: 30px 0;

    ;

  }

  .quill-editor {
    min-height: 400px;

    overflow-y: auto;
    margin-bottom: 22px;
  }

  .right {
    margin: 0px 0 25px;

    .anl {
      width: 65px;
      height: 30px;

      padding: 9px 15px;
    }

    a {
      font-size: 12px;
      color: #ff9f00;

    }
  }

}
</style>
