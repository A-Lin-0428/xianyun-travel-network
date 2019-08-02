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
    }
  },

  mounted() {
    // 获取到输入建议的数据

  }
}
</script>
<style lang="less" scoped>
</style>
