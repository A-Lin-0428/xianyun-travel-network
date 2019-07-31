
//保存数据的属性state
// export const state = {
//   userInfo: {
//     token: '',
//     user: {}
//   }
// }
export const state = () => {
  return {
    userInfo: {
      token: '',
      user: {}
    }
  }
}
// 同步修改数据mutations
export const mutations = {
  //获取用户登录数据
  getUserInfo(state, data) {
    state.userInfo = data
  },
  clearUserInfo(state) {
    state.userInfo = {}
  }
}


// 异步修改数据actions
export const actions = {

}
