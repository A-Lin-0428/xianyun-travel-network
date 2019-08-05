<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="8">
        <span>单程：{{data.info.departCity}}-{{data.info.destCity}} / {{data.info.departDate}}</span>
      </el-col>
      <el-col :span="16">
        <div class="select">
          <el-row type="flex" justify="space-around">
            <el-select v-model="airports" placeholder="起飞机场">
              <el-option
                v-for="(item,index) in data.options.airport"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
            <el-select v-model="flightTimes" placeholder="起飞时间">
              <el-option
                v-for="(item ,index) in data.options.flightTimes"
                :key="index"
                :label="`${item.from}:00-${item.to}:00`"
                :value="`${item.form},${item.to}`"
              ></el-option>
            </el-select>
            <el-select v-model="company" placeholder="航空公司" @change="handleCompany">
              <el-option
                v-for="(item,index) in data.options.company"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
            <el-select v-model="plane_size" placeholder="机型">
              <el-option
                v-for="(item,index) in planeSizeList"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <span>
      筛选：
      <el-button type="primary" plain class="btn">撤销</el-button>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      airports: '',
      flightTimes: '',
      company: '',
      plane_size: '',
      planeSizeList: [
        { label: '大', value: 'L' },
        { label: '中', value: 'M' },
        { label: '小', value: 'S' },
      ]
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 选择起飞机场

    // 选择起飞时间

    // 选择航空公司
    handleCompany(value) {
      // console.log(value)
      // 过滤条件，保留符合选择的航班
      const arr = this.data.flights.filter(val => {
        return val.airline_name == value
      })
      // 刷新数据
      this.$emit('getDataList', arr)
    }

    // 选择飞机机型
  }
}
</script>
<style lang="less" scoped>
.container {
  margin: 30px 0;
}

span {
  font-size: 14px;
}
.el-select {
  margin-left: 10px !important;
}
.btn {
  border-radius: 30px;
  width: 60px;
  height: 30px;
  text-align: center;
  padding: 8px;
}
</style>

