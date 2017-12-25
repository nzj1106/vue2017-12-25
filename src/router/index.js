import Vue from 'vue'
import VueRouter from 'vue-router'

import More from '../pages/detail.vue'
import Shop from '../pages/shop.vue'
import ShopInfo from '../pages/shopInfo.vue'
import Demo from '../pages/demo.vue'


Vue.use(VueRouter)
const routes = [
  {path: '/',component: resolve => require(['../pages/home'],resolve),meta: {title:'home'}},
  {path: '/more',component: More},
  {path: '/shop',component: Shop},
  {path: '/shopinfo',component: ShopInfo},
  {path: '/demo',component: Demo}
]
export default new VueRouter({
  routes
})
