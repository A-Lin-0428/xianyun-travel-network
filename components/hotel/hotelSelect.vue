<template>
  <div class="container">
    <el-row type="flex" class="Hotellist">
      <el-col :span="6">
        <el-row type="flex" justify="space-between">
          <span>价格</span>
          <span>0-{{price}}</span>
        </el-row>
        <el-slider v-model="price" :max="4000" @change="handlePrice"></el-slider>
      </el-col>
      <el-col :span="18">
        <el-row type="flex">
          <el-col :span="6">
            <p>住宿等级</p>
            <el-select
              v-model="hotelStar"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="不限"
              class="clearborder"
              :automatic-dropdown="true"
              @change="handleLevel"
            >
              <el-option
                v-for="(item,index) in hotelSelect.levels"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <p>住宿类型</p>
            <el-select
              v-model="hotelStyle"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="不限"
              class="clearborder"
              @change="handleStyle"
            >
              <el-option
                v-for="(item,index) in hotelSelect.types"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <p>酒店设施</p>
            <el-select
              v-model="hotelServe"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="不限"
              class="clearborder"
              @change="handleAssets"
            >
              <el-option
                v-for="item in hotelSelect.assets"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <p>酒店品牌</p>
            <el-select
              v-model="hotelBrand"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="不限"
              class="clearborder"
              @change="handleBrand"
            >
              <el-option
                v-for="(item,index) in hotelSelect.brands"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    Info: {
      type: Array,
      default: () => { }
    }
  },
  data() {
    return {
      // 选定后，双向绑定保存的数据
      price: 4000,
      hotelStar: '',
      hotelStyle: '',
      hotelServe: '',
      hotelBrand: '',
      // 获取酒店选项，保存的数据
      hotelSelect: {}
      // 保存筛选hotels数据的请求

    }
  },
  mounted() {
    // 获取酒店选项
    this.$axios({
      url: '/hotels/options',
      method: 'GET'
    }).then(res => {
      // console.log(res.data.data)
      this.hotelSelect = res.data.data
    })
  },
  methods: {
    //移动价格区间的时候触发
    handlePrice(val) {
      // 获取到的val就会移动的值
      // console.log(val)
      const arr = this.Info.filter(v => {
        return v.price < val
      })
      this.$emit('getFliterHotel', arr)

    },
    // 筛选酒店级别
    handleLevel(val) {
      //  val是数组
      // console.log(val)
      const newArr = this.Info.filter(item => {
        let pass = true;
        val.forEach(v => {
          if (item.hotellevel == []) {
            retrun
          }
          // 满足每个数据的值和过滤条件的值相等
          if (item.hotellevel.name !== v) {
            pass = false
          }
        });
        return pass;
      })
      this.$emit('getFliterHotel', newArr)

    },
    // 筛选酒店类型
    handleStyle(val) {
      //  val是数组
      const newArr = this.Info.filter(item => {
        let pass = true;
        val.forEach(v => {
          // 满足每个数据的值和过滤条件的值相等
          if (item.hoteltype.name !== v) {
            pass = false
          }
        });
        return pass;
      })
      this.$emit('getFliterHotel', newArr)


    },
    // 筛选酒店服务
    handleAssets(val) {
      const newArr = this.Info.filter(item => {
        let pass = true;
        if (item.hotelassets == []) {
          return
        }
        val.forEach(v => {
          if (item.hotelassets.name !== v) {
            pass = false
          }
        });
        return pass
      })
      this.$emit('getFliterHotel', newArr)
    },
    //筛选酒店品牌
    handleBrand(val) {
      //  val是数组
      const newArr = this.Info.filter(item => {
        let pass = true;
        if (item.hotelbrand == null) {
          return
        }
        val.forEach(v => {
          // 满足每个数据的值和过滤条件的值相等
          if (item.hotelbrand.name !== v) {
            pass = false
          }
        });
        return pass;
      })
      this.$emit('getFliterHotel', newArr)

    }
  }
}
</script>

<style lang="less" scoped>
.container {
  color: #60627f;
  margin-bottom: 30px;
  height: 80px;
  border: 1px solid #dddddd;
  padding: 5px 0px;
  .Hotellist {
    margin-top: 11px;
    /deep/ .el-col {
      padding: 0 10px;
      border-right: 1px solid #dddddd;
      &:last-child {
        border-right: 0;
      }
    }
  }

  .clearborder {
    margin-left: 0 !important;
    /deep/ .el-input--suffix {
      .el-input__inner {
        border: none;
        padding: 0;
        color: #60627f;
      }
    }
  }
}
</style>
  