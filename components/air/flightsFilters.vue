<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="8">
        <span>单程：{{data.info.departCity}}-{{data.info.destCity}} / {{data.info.departDate}}</span>
      </el-col>
      <el-col :span="16">
        <div class="select">
          <el-row type="flex" justify="space-around">
            <el-select v-model="airports" placeholder="起飞机场" @change="handleAirports">
              <el-option
                v-for="(item,index) in data.options.airport"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
            <el-select v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
              <el-option
                v-for="(item ,index) in data.options.flightTimes"
                :key="index"
                :label="`${item.from}:00-${item.to}:00`"
                :value="`${item.from},${item.to}`"
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
            <el-select v-model="plane_size" placeholder="机型" @change="handlePlaneSize">
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
      <el-button type="primary" plain class="btn" @click="handleClear">撤销</el-button>
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
    handleAirports(value) {
      // console.log(value)
      // 筛选出符合要求,然后返回
      const arr = this.data.flights.filter(val => {
        return val.org_airport_name == value
      })
      // 刷新数据
      this.$emit('getDataList', arr)
    },
    // 选择起飞时间
    handleFlightTimes(value) {
      // console.log(value)  0,6
      const [from, to] = value.split(',')
      // 筛选过滤条件，保留符合要求的航班
      const arr = this.data.flights.filter(val => {
        const start = val.dep_time.split(':')[0]
        return start >= from && start < to
      })
      // 刷新数据
      this.$emit('getDataList', arr)
    },
    // 选择航空公司
    handleCompany(value) {
      // console.log(value)
      // 过滤条件，保留符合选择的航班
      const arr = this.data.flights.filter(val => {
        return val.airline_name == value
      })
      // 刷新数据
      this.$emit('getDataList', arr)
    },

    // 选择飞机机型
    handlePlaneSize(value) {
      // 满足过滤条件的，筛选出来
      const arr = this.data.flights.filter(val => {
        return val.plane_size == value
      })

      // 刷新数据
      this.$emit('getDataList', arr)
    },
    // 点击撤销按钮，恢复初始状态
    handleClear() {
      // 全部筛选数据清空
      this.airports = '',
        this.flightTimes = '',
        this.company = '',
        this.plane_size = ''
      // 数据重新刷新
      // 刷新数据
      this.$emit('getDataList', this.data.flights)
    }
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

