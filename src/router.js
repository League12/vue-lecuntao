import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home'
import goodslist from './views/Goodslist'
import shopcar from './views/Shopcar'
import person from './views/Person'
import goodsdetail from './views/Goodsdetail'
import location from './views/location'
import city from './views/city'
import selectedlist from './views/goodslist/selectedlist'
import Search from './views/Search'
import headerbar from './views/headerbar'
import setting from './views/Setting'
import order from './views/Order'
import orderall from './views/order/Orderall'
import orderdelivergoods from './views/order/Orderdelivergoods'
import orderfinal from './views/order/Orderfinal'
import orderpayment from './views/order/Orderpayment'
import orderreceivinggoods from './views/order/Orderreceivinggoods'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/goodslist',
      component: goodslist
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/person',
      component: person
    },
    {
      path: "/goodsdetail/:gcid",
      component: goodsdetail
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/location',
      component: location
    },
    {
      path: '/location/:id',
      name: 'city',
      component: city,
      props: true
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/selectedlist/:list',
      component: selectedlist
    },
    {
      path: '/headerbar',
      component: headerbar
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/order',
      component: order,
      children: [
        {
          path: '/order/all',
          component: orderall
        },
        {
          path: '/order/orderpayment',
          component: orderpayment
        },
        {
          path: '/order/orderdelivergoods',
          component: orderdelivergoods
        },
        {
          path: '/order/orderreceivinggoods',
          component: orderreceivinggoods
        },
        {
          path: '/order/orderfinal',
          component: orderfinal
        },
        {
          path: '',
          redirect: "/order/all"
        },
      ]
    }
  ]
})
