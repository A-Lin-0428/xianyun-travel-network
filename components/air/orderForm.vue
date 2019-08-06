<template>
  <div class="container">
    <div class="passengerInfo">
      <h2>乘机人</h2>
      <el-form v-for="(item,index) in users" :key="index" style="position: relative;">
        <el-form-item label="乘机人类型">
          <el-input placeholder="姓名" v-model="item.username" class="input-with-select">
            <el-select value="1" slot="prepend" placeholder="请选择">
              <el-option label="成人" value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-input placeholder="证件号码" v-model="item.id" class="input-with-select">
            <el-select value="1" slot="prepend" placeholder="请选择">
              <el-option label="身份证" value="1"></el-option>
              <el-option label="护照" value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <span class="delete-user" v-show="index!=0" @click="handleDel(index)">-</span>
      </el-form>
    </div>
    <el-button type="primary" class="add-user" @click="handleAddUser">添加乘机人</el-button>
    <div class="insurance">
      <h2>保险</h2>
      <el-checkbox-group v-for="(item,index) in data.insurances&&data.insurances" :key="index">
        <el-checkbox
          :label="`${item.type}：￥${item.price}/份x1 最高赔付${item.compensation}`"
          border
          @change="handleInsuId(item)"
        ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="linkman">
      <h2>联系人</h2>
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="contactName"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input placeholder="请输入内容" v-model="contactPhnoe">
            <template slot="append">发送验证码</template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="captcha"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="warning" class="btn">提交订单</el-button>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      users: [{ username: '', id: '' }],
      insurances: [],
      contactName: '',
      contactPhnoe: '',
      captcha: '',
      invoice: false,
      seat_xid: '',
      air: 0,

    }
  },
  methods: {
    // 添加乘机人
    handleAddUser() {
      // 给users添加一个对象
      this.users.push({ username: '', id: '' })
    },
    // 点击删除乘机人
    handleDel(index) {
      this.users.splice(index, 1)
    },
    // 点击保险选项的触发
    handleInsuId(item) {
      console.log(item)
    }
  },
  mounted() {
    console.log(this.data)
  }

}
</script>
<style lang="less" scoped>
.container {
  margin: 20px 0;
  padding-bottom: 30px;
  border-bottom: 1px dashed #ddd;
  .delete-user {
    display: block;
    background: #ddd;
    width: 16px;
    height: 16px;
    font-size: 14px;
    text-align: center;
    line-height: 16px;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    position: absolute;

    right: -30px;
    top: 50%;
  }
  .add-user {
    margin: 20px 0;
  }
  h2 {
    font-weight: normal;
    margin: 20px 0;
  }
  .insurance {
    padding-bottom: 40px;
    border-bottom: 1px dashed #ddd;
    border-top: 1px dashed #ddd;
  }
  /deep/.el-checkbox {
    width: 317px;
    height: 40px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }

  .linkman {
    /deep/ .el-input {
      width: 300px;
      height: 30px;
    }
  }

  .btn {
    width: 268px;
    height: 58px;
    text-align: center;
    line-height: 37px;
    margin-left: 200px;
  }
}
</style>

