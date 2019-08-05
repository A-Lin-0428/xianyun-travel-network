export const state = () => {
  return {
    //  定义用户搜索机票时候的历史记录
    history: []

  }
}
// 同步修改数据mutations
export const mutations = {
  //获取用户搜索机票的数据
  getAirHistory(state, arr) {
    state.history = arr
  }

}