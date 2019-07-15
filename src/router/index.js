import Vue from 'vue'
import Router from 'vue-router'

const list = () => import("@/pages/list")
const detail = () => import("@/pages/detail")
const order = () => import("@/pages/order")


const index = () => import("@/pages/index")
const details = () => import("@/pages/details")
const order_search = () =>import("@/pages/order_search")


Vue.use(Router)

export default new Router({
  mode: 'history',
  //在此处加入
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/order_search',
      name: 'order_search',
      component: order_search
    }
  ]
})
