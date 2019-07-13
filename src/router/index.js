import Vue from 'vue'
import Router from 'vue-router'

const list = () => import("@/pages/list")
const detail = () => import("@/pages/detail")
const order = () => import("@/pages/order")


const index = () => import("@/pages/index")
const details = () => import("@/pages/details")


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/',
    //   name: 'details',
    //   component: details
    // },
    // {
    //   path: '/',
    //   name: 'list',
    //   component: list
    // },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
