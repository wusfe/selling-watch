import axios from 'axios'
import tools from './utils/tools'
import QS from 'qs'
import { Toast } from 'mint-ui';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://ancl.vip'

export function createServer () {
  axios.interceptors.request.use(config => {
    if (config.url.indexOf('http') === 0) config.baseURL = ""
    if (!config.headers.hasOwnProperty('Content-Type') &&
      config.headers['Content-Type'] != 'multipart/form-data') {
      let reqData = config.method == 'post' ? config.data : config.params
      if (reqData)
        Object.keys(reqData).forEach(function (key) {
          if (typeof reqData[key] == 'string') reqData[key] = tools.trim(reqData[key])
        })
      if (config.method == 'post') {
        config.data = QS.stringify(config.data) //防止post请求参数无法传到后台
      }
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(response => {
    if (response.data && (response.data instanceof Object)) {
      if (response.data.respond === 1) {
        return Promise.resolve(response.data)
      } else {
        return Promise.reject(response)
      }
    } else {
      return Promise.reject(response)
    }
    // 错误分类置于客户端
  })

  return {
    post(url, data, option = {}) {
      return axios(Object.assign(option, {
        method: 'post',
        url,
        data
      }))
    },
    get(url, data, option = {}) {
      return axios(Object.assign(option, {
        method: 'get',
        url,
        params: data
      }))
    },
    baseURL: axios.defaults.baseURL
  }

}
