<template>
  <div class="container">
    <el-row type="flex" class="Hotellist">
      <el-col :span="6">
        <el-row type="flex" justify="space-between">
          <span>价格</span>
          <span>0-4000</span>
        </el-row>
        <el-slider v-model="price"></el-slider>
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
            >
              <el-option
                v-for="(item,index) in hotelSelect.levels"
                :key="index"
                :label="item.name"
                :value="item.id"
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
            >
              <el-option
                v-for="(item,index) in hotelSelect.types"
                :key="index"
                :label="item.name"
                :value="item.id"
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
            >
              <el-option
                v-for="item in hotelSelect.assets"
                :key="item.id"
                :label="item.name"
                :value="item.id"
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
            >
              <el-option
                v-for="(item,index) in hotelSelect.brands"
                :key="index"
                :label="item.name"
                :value="item.id"
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
  data() {
    return {
      // 选定后，双向绑定保存的数据
      price: '',
      hotelStar: '',
      hotelStyle: '',
      hotelServe: '',
      hotelBrand: '',
      // 获取酒店选项，保存的数据
      hotelSelect: {}
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
  