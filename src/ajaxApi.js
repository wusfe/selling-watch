import { createServer } from './ajax'
import { getPar } from  './utils/tools'
let http = createServer()

export const list = (data = {}) => http.get('/api/goods/list', data)
export const detail = (data = {}) => http.get('/api/goods/detail', data)
export const order = (data = {}) => {
  return http.post('/api/order/new', Object.assign({}, data, {
    source: getPar('source')
  }))
}
export const write = (data = {}) =>{
  return  http.post('/api/log/write', Object.assign({}, data, {
    source: getPar('source'),
    url: window.location.href
  }))
}
