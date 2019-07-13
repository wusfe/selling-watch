// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import "amfe-flexible/index.js";
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem, Lazyload } from 'mint-ui';
Vue.use(VueRouter)
Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// window.onscroll = function(){
//   console.log(1)
//   console.log()
// }
