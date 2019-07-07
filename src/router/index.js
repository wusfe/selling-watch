import Vue from 'vue'
import Router from 'vue-router'
const list = () => import("@/pages/list")
const detail = () => import("@/pages/detail")
const order = () => import("@/pages/order")

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
