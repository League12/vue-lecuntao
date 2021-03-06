import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home'
import goodslist from './views/Goodslist'
import shopcar from './views/Shopcar'
import person from './views/Person'
import goodsdetail from "./views/Goodsdetail"
import search from './views/Search'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: "/home",
      component: home
    },
    {
      path: "/goodslist",
      component: goodslist
    },
    {
      path: "/shopcar",
      component: shopcar
    },
    {
      path: "/person",
      component: person
    },
    {
      path: "/goodsdetail",
      component: goodsdetail
    },
    {
      path: "/search",
      component: search
    },
    {
      path: "*",
      component: home
    }
  ]
})
