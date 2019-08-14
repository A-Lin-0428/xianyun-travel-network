<template>
  <div class="container">
    <div class="left">
      <span>发表新攻略</span>
      <p>分享你的个人游记,让更多人看到你哦！</p>
    </div>
    <el-row>
      <el-input v-model="addForm.title" placeholder="请输入标题" class="List"></el-input>
      <div class="scntainers" xmlns:v-quill="富文本编辑器">
        <div class="quill-editor" :content="addForm.content" v-quill:myQuillEditor="editorOption"></div>
      </div>
      <div class="el-form-item__content">
        <div data-v-a7cc81fa class="el-form-item">
          <label class="el-form-item__label">选择城市</label>
          <div class="el-form-item__content">
            <!-- <div
              data-v-a7cc81fa
              aria-haspopup="listbox"
              role="combobox"
              aria-owns="el-autocomplete-3440"
              class="el-autocomplete el-autocomplete"
              aria-expanded="true"
            >
              <div class="el-input">
               
              </div>
            </div>-->
            <!---->
            <el-autocomplete
              class="el-autocomplete"
              v-model="destination"
              :fetch-suggestions="queryCitySearch"
              placeholder="请搜索游玩城市"
              @select="handleCitySelect"
            ></el-autocomplete>
          </div>
        </div>
        <!---->
      </div>
      <div class="right">
        <el-button class="anl" type="primary" @click="handleLaunch">发布</el-button>
        <span>
          或者
          <i @click.native="handleDraft">保存到草稿</i>
        </span>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destination: '',
      addForm: {
        city: '',
        title: '',
        content: '',
      },
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
  methods: {
    // fetch-suggestions 当每次在输入框中输入文字的时候回触发该事件
    queryCitySearch(value, cb) {
      // value:输入框的值
      // cb:回调函数，必须要调用，接收的参数格式是固定的，必须是一个数组，且数组中每一项必须
      // 是对象
      if (!value) {
        cb([])
        return
      }
      // 获取城市列表
      this.$axios({
        url: '/cities',
        params: {
          name: value
        }
      }).then(res => {
        // console.log(res)
        const { data } = res.data

        // 循环数组，给每一项数据添加一个value属性
        const newDate = []

        data.forEach(v => {
          v.value = v.name;
          newDate.push(v)
        });
        // 设置第一个为选中的默认值
        this.destination = newDate[0].value
        cb(newDate)
      })

    },
    // select 点击选中建议项时触发
    handleCitySelect(item) {
      // console.log(item)
      this.city = item.id
    },
    //  点击保存到草稿箱
    handleDraft() {

    },
    // 点击发布按钮
    handleLaunch() { }
  },
  mounted() {
    // console.log('app init, my quill insrance object is:', this.myQuillEditor)
    setTimeout(() => {
      this.content = 'i am changed'
    }, 3000)
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

    i {
      font-size: 12px;
      color: #ff9f00;
      cursor: pointer;
      &:hover {
        border-bottom: #ff9f00 1px solid;
      }
    }
  }
}
</style>
