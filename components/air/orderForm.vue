<template>
  <div class="contaniner">
    <div class="passengerInfo">
      <h2>乘机人</h2>
      <el-form ref="passengerform" :model="passengerform">
        <el-form-item label="乘机人类型">
          <el-input placeholder="姓名" v-model="passengerform.name" class="input-with-select">
            <el-select v-model="ageSelect" slot="prepend" placeholder="请选择">
              <el-option label="成人" value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-input placeholder="证件号码" v-model="passengerform.card" class="input-with-select">
            <el-select v-model="certSelect" slot="prepend" placeholder="请选择">
              <el-option label="身份证" value="1"></el-option>
              <el-option label="护照" value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">添加乘机人</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="insurance">
      <h2>保险</h2>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="航空意外险：￥30/份x1 最高赔付260万"></el-checkbox>
        <br />

        <el-checkbox label="航空延误险：￥30/份x1 最高赔付300万"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="linkman">
      <h2>联系人</h2>
      <el-form ref="linkmanform" :model="linkmanform" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="linkmanfrom.name"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="linkmanfrom.phone"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="linkmanfrom.code"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      passengerform: {
        name: '',
        card: ''
      },
      ageSelect: '',
      certSelect: '',
      checkList: '',
      linkmanform: {
        name: '',
        phone: '',
        code: ''
      }
    }
  }

}
</script>
<style lang="less" scoped>
.container {
  margin-top: 20px;
  .passengerInfo {
    padding: bottom 20px;
    border-bottom: 1px dashed #ddd;
  }
  h2 {
    font-weight: normal;
    margin: 20px 0;
  }
  .insurance {
    border-bottom: 1px dashed #ddd;
  }
  /deep/.el-checkbox {
    width: 317px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }
}
</style>

