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
    }
  ]
})
