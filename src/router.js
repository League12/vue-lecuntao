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
import headerbar from './views/headerbar'

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
    }
  ]
})
