import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home'
import goodslist from './views/Goodslist'
import shopcar from './views/Shopcar'
import person from './views/Person'
import goodsdetail from './views/Goodsdetail'
import Location from './views/Location'
import City from './views/City'
import selectedlist from './views/goodslist/selectedlist'
import Search from './views/Search'
import SearchResult from './views/SearchResult'
import Cart from './views/Cart'
import SearchStore from './views/SearchStore'
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
      path: '/goodsdetail/:gcid',
      component: goodsdetail
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/location',
      component: Location
    },
    {
      path: '/location/:id',
      name: 'city',
      component: City,
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
      path: '/searchResult',
      component: SearchResult
    },
    {
      path: '/searchStore',
      component: SearchStore
    },
    {
      path: '/cart',
      component: Cart
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
          redirect: '/order/all'
        }
      ]
    }
  ]
})
