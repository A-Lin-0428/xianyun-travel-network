// 引入element-ui
import { Message } from 'element-ui'

export default function ({ $axios, redirect }) {
  $axios.onError(err => {
    // console.log(err)
    const { statusCode, message } = err.response.data

    if (statusCode) {
      if (statusCode === 403 || statusCode === 401) {
        // 跳转到登录页面
        redirect('/user/login')
      }

      if (statusCode === 400) {
        Message.warning({ message })
      }
    }
  })
}