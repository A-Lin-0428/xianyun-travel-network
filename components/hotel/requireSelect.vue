<template>
  <div class="container">
    <el-row type="flex" :gutter="20">
      <el-col :span="5">
        <el-autocomplete
          class="el-autocomplete"
          v-model="destination"
          :fetch-suggestions="queryCitySearch"
          placeholder="目的地"
          @select="handleCitySelect"
        ></el-autocomplete>
      </el-col>
      <el-col :span="14">
        <el-row type="flex">
          <el-col :span="16">
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-col>
          <el-col :span="8">
            <el-input
              placeholder="人数未定"
              suffix-icon="el-icon-user"
              v-model="persons"
              @click.native="isShow=true"
            ></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <el-button type="primary">查看价格</el-button>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 隐藏或者显示的入住人数量 -->
    <el-dialog :visible.sync="isShow" :modal="false" width="25%" :show-close="false">
      <div class="numPerson_top">
        <el-row :gutter="20">
          <el-col :span="8">每间</el-col>
          <el-col :span="8">
            <el-select v-model="adultNum" :value="adultArr[1]" placeholder="请选择">
              <el-option v-for="(item,index) in adultArr" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-select v-model="childNum" placeholder="请选择">
              <el-option v-for="(item,index) in [1,2,3,4]" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="numPerson_bottom">
        <el-button type="primary" class="confirmBtn" @click="handleSumbit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destination: '',
      time: '',
      persons: '',
      isShow: false,
      adultArr: [1, 2, 3, 4, 5, 6, 7],
      adultNum: '2成人',
      childNum: '0儿童',
      cityInfo: {}
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

        // 如用户没有点击选中，直接默认选中第一个
        this.destination = data[0].name
        // 循环数组，给每一项数据添加一个value属性
        const newDate = []

        data.forEach(v => {
          v.value = v.name;
          newDate.push(v)
        });
        cb(newDate)
      })

    },
    // select 点击选中建议项时触发
    handleCitySelect(item) {
      this.cityInfo = item
      // console.log(this.cityInfo)
      // 将数据传递给父组件
      this.$emit('getCityInfo', item)
      // 跳转到具体城市酒店详情页
      this.$router.push({
        path: '/hotel',
        query: { city: item.id }
      }
      )
    },
    //  点击人员数量确定时候触发
    handleSumbit() {
      //  收回弹窗
      this.isShow = false

    }
  }
}
</script>
<style lang="less" scoped>
.container {
  position: relative;
  margin: 35px 0;

  // .numPerson {
  //   position: absolute;
  //   top: 53px;
  //   right: 102px;
  //   padding: 15px;
  //   width: 271px;
  //   height: 100px;
  //   background-color: #fff;
  //   // border: 1px solid #ebeef5;
  //   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  //   z-index: 10;
  /deep/ .el-dialog {
    margin-top: 31vh !important;
    margin-left: 126vh;
  }
  /deep/.el-dialog__body {
    padding: 15px 10px;
  }
  /deep/ .el-dialog__header {
    padding: 0 !important;
  }
  .numPerson_top {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    /deep/ .el-input--suffix {
      .el-input__inner {
        padding-left: 10px;
        height: 30px;
        font-size: 12px;
        line-height: 30px;
      }
    }
    /deep/ .el-input__suffix {
      .el-input__suffix-inner {
        .el-input__icon {
          line-height: 30px;
        }
      }
    }
  }
  .numPerson_bottom {
    width: 100%;
    // line-height: 40px;
    text-align: right;

    .confirmBtn {
      margin-top: 20px;
      padding: 5px 8px;
    }
  }
  // }
}
</style>
