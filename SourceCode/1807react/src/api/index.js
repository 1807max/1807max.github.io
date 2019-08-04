
import axios from 'axios'
import {message} from 'antd'
axios.defaults.baseURL = 'http://localhost:7000'
export default function ajax(url, data = {}, type = "GET") {  // 形参默认值

  return new Promise((resolve, reject) => {
    let promise
    // 执行异步ajax请求
    if (type === 'GET') {
      promise = axios.get(url, { // 配置对象
        // 指定包含所有query参数数据的对象
        params: data
      })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 请求成功, 调用resolve()并传递成功的数据
      resolve(response.data)
    }).catch(error => {
      //  请求失败了, 不调用reject(), 显示请求错误的提示
      // reject(error) // 不要调用
      message.error('请求异常: ' + error.message)
    })


  })


}
