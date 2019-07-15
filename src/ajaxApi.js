import { createServer } from './ajax'
import { getPar } from  './utils/tools'
let http = createServer()

export const list = (data = {}) => http.get('/api/goods/list', data)
export const details = (id) => http.get(`/api/goods/detail?goods_id=${id}`)
export const orderRedis = (tel) => http.get(`/api/order/redis?tel=${tel}`)
export const order = (data = {}) => {
  return http.post('/api/order/news', Object.assign({}, data, {
    source: getPar('source')
  }))
}
export const write = (data = {}) =>{
  return  http.post('/api/log/write', Object.assign({}, data, {
    source: getPar('source'),
    url: window.location.href
  }))
}

export const search =( data = {}) =>
{
  return http.post('api/order/select', Object.assign({}, data, {
    source: getPar('source'),
  }))
}
