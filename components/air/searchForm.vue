<template>
  <div class="searchForm" style="margin-top:20px">
    <el-form label-width="80px" :model="searchForm">
      <el-form-item label="出发城市">
        <el-autocomplete
          class="el-autocomplete"
          v-model="searchForm.departCity"
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="handleDepartSelect"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          class="el-autocomplete"
          v-model="searchForm.destCity"
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select="handleDestSelect"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <el-date-picker
          v-model="searchForm.departDate"
          type="date"
          @change="handleDate"
          placeholder="选择日期"
          style="width:210px"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" style="width:210px" @click="handleSearch">搜索</el-button>
      </el-form-item>
      <el-button type="info" class="btn" @click="changeSearch">换</el-button>
      <div class="line"></div>
    </el-form>
  </div>
</template>
<script>
// 引入moment
import Moment from 'moment'
export default {
  data() {
    return {
      arr: [],
      searchForm: {
        departCity: '',
        departCode: '',
        destCity: '',
        destCode: '',
        departDate: ''
      }
    }
  },
  methods: {
    // 出发城市输入框获得焦点时触发
    //value是选中的值，cb是回调函数，接收要展示的列表
    queryDepartSearch(value, cb) {
      // 没有输入框的值得时候返回
      if (!value) {
        cb([]);
        return
      }
      // 获取城市列表
      this.$axios({
        url: '/airs/city',
        //设置get请求的参数
        params: {
          name: value
        }
      }).then(res => {
        const { data } = res.data
        const newDate = data.map(item => {
          item.value = item.name.replace('市', '')
          return item
        })
        // 设置第一个为默认选中的
        this.searchForm.departCity = newDate[0].value
        this.searchForm.departCode = newDate[0].sort
        cb(newDate)
      })
    },

    //到达城市输入框焦点时触发
    queryDestSearch(value, cb) {
      // 输入框中没有信息的时候，不触发
      if (!value) {
        cb([])
        return
      }

      // 发送axaios请求
      this.$axios({
        url: '/airs/city',
        params: {
          name: value
        }
      }).then(res => {
        // console.log(res)
        const { data } = res.data
        const newDate = data.map(v => {
          v.value = v.name.replace('市', '')
          return v
        })
        // 设置第一个为默认选中的
        this.searchForm.destCity = newDate[0].value
        this.searchForm.destCode = newDate[0].sort
        cb(newDate)
      })
    },


    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      // console.log(item);
      this.searchForm.departCode = item.sort
      this.searchForm.departCity = item.value
    },

    //到达城市下拉选择时触发
    handleDestSelect(item) {
      this.searchForm.destCode = item.sort
      this.searchForm.destCity = item.value
    },
    //选择时间的时候触发
    handleDate(value) {
      // console.log(value)
      this.searchForm.departDate = Moment(value).format('YYYY-MM-DD')
    },
    // 点击搜索
    handleSearch() {
      // console.log(123)
      // 表单验证
      if (!this.searchForm.departCity) {
        this.$alert('出发城市不能为空', '提示', {
          type: 'warning'
        })
      }

      if (!this.searchForm.destCity) {
        this.$alert('到达城市不能为空', '提示', {
          type: 'warning'
        })
      }
      if (!this.searchForm.departDate) {
        this.$alert('出发时间不能为空', '提示', {
          type: 'warning'
        })
      }
      // 数据获取成功，跳转到机票详情页面
      this.$router.push({
        path: '/air/flights',
        query: this.searchForm
      })

      // 获取出本地（vuex）的数据
      const arr = [...this.$store.state.air.history];
      // 新的记录添加到第一个
      arr.unshift(this.searchForm)
      // 历史记录只保留5位
      if (arr.length > 5) {
        arr.length = 5
      }
      // 调用vuex的方法来保存数据
      this.$store.commit('air/getAirHistory', [this.searchForm])
      this.$store.commit('air/getAirHistory', arr)
    },

    // 点击“换”的按钮
    changeSearch() {
      const { departCity, departCode, destCity, destCode } = this.searchForm
      this.searchForm.departCity = destCity
      this.searchForm.departCode = destCode
      this.searchForm.destCity = departCity
      this.searchForm.destCode = departCode


    }
  }
}
</script>
<style lang="less" scoped>
.btn {
  padding: 5px !important;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: 117px;
  left: 314px;
  font-size: 12px;
  z-index: 1;
}
.line {
  width: 37px;
  height: 58px;
  border: 1px solid #dddddd;
  border-left: none;
  position: absolute;
  top: 103px;
  left: 288px;
  z-index: 0;
}
</style>
