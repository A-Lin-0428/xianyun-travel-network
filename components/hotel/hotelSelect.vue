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
              automatic-dropdown="true"
            >
              <el-option
                v-for="(item,index) in ['1星','2星','3星','4星','5星']"
                :key="index"
                :label="item"
                :value="item"
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
                v-for="(item,index) in ['经济型','舒适型','高档型','豪华型','度假村','公寓式酒店']"
                :key="index"
                :label="item"
                :value="item"
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
                v-for="(item,index) in ['wifi','热水壶','抽风机','外币兑换服务','洗衣服务','电梯']"
                :key="index"
                :label="item"
                :value="item"
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
                v-for="(item,index) in ['7天连锁','汉庭','如家','格林豪泰','....']"
                :key="index"
                :label="item"
                :value="item"
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
      price: '',
      hotelStar: '',
      hotelStyle: '',
      hotelServe: '',
      hotelBrand: ''
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
  