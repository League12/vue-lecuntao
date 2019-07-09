<template>
  <div class="selectedlist">
    <div class="top">
      <header>
        <button @click="handleBack"></button>
        <h2>{{ JSON.parse(this.$route.params.list).gcname }}</h2>
      </header>

      <nav>
        <ul>
          <li @click="handleNavClick(0)" :class="navcurrent === 0 ? 'nav-cur' : ''">全部</li>
          <li @click="handleNavClick(1)" :class="navcurrent === 1 ? 'nav-cur' : ''">销量优先</li>
          <li @click="handleNavClick(2)" :class="navcurrent === 2 ? 'nav-cur' : ''">
            <p>价格</p>
            <pricesort :mysort="prisort"></pricesort>
          </li>
          <li @click="handleNavClick(3)" :class="navcurrent === 3 ? 'nav-cur' : ''">人气</li>
        </ul>
      </nav>
    </div>

    <main>
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-immediate-check="false"
          infinite-scroll-distance="10">
        <li v-for="(goods, index) in goodslist" :key="index" @click="handleMainClick(goods.goods_id)">
          <img :src="goods.goods_image" alt="">
          <div>
            <h3>{{ goods.goods_name }}</h3>
            <p>
              <span>{{ goods.goods_price }}</span>
              <span>{{ goods.goods_salenum }}人付款</span>
            </p>
          </div>

        </li>
      </ul>
    </main>

  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import pricesort from './Pricesort'
import { InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)

export default {

  data () {
    return {
      goodslist: [],
      navcurrent: 0,
      prisort: 0,
      sort: 4,
      page: 1,
      sequence: 0,
      loading: false
    }
  },

  mounted () {
    this.$store.commit('toggleFooterbar', false)
    this.getAllData()
  },

  destroyed () {
    this.$store.commit('toggleFooterbar', true)
  },

  methods: {

    loadMore () {
      axios({
        url: `/lct?provinc=110&city=110100000000&keyword=&page=${this.page++}&sorted=${this.sort}&sequence=${this.sequence}&gcId=${JSON.parse(this.$route.params.list).gcid}&workshop=api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562373149571&act=goods&op=goodsList`
      }).then(res => {
        this.goodslist = [...this.goodslist, ...res.data.datas.list]
      })
    },

    handleNavClick (cur) {
      this.navcurrent = cur
      switch (cur) {
        case 0: {
          this.getAllData()
          break
        }
        case 1: {
          this.getSorted_1()
          break
        }
        case 2: {
          this.getSorted_2()
          break
        }
        case 3: {
          this.getSorted_3()
          break
        }
        default: {
          break
        }
      }
    },

    getAllData () {
      this.prisort = 0
      this.sequence = 0
      this.sort = 4
      this.page = 1
      axios({
        url: `/lct?provinc=110&city=110100000000&keyword=&page=${this.page++}&sorted=${this.sort}&sequence=${this.sequence}&gcId=${JSON.parse(this.$route.params.list).gcid}&workshop=api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562373149571&act=goods&op=goodsList`
      }).then(res => {
        this.goodslist = res.data.datas.list
      })
    },

    getSorted_1 () {
      this.prisort = 0
      this.sort = 1
      this.page = 1
      axios({
        url: `/lct?provinc=110&city=110100000000&keyword=&page=${this.page++}&sorted=${this.sort}&sequence=${this.sequence}&gcId=${JSON.parse(this.$route.params.list).gcid}&workshop=api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562383394124&act=goods&op=goodsList`
      }).then(res => {
        this.goodslist = res.data.datas.list
      })
    },

    getSorted_2 () {
      this.sort = 3
      this.page = 1
      if (this.prisort === 0 || this.prisort === 2) {
        this.prisort = 1
        this.sequence = 1
        axios({
          url: `/lct?provinc=110&city=110100000000&keyword=&page=${this.page++}&sorted=${this.sort}&sequence=${this.sequence}&gcId=${JSON.parse(this.$route.params.list).gcid}&workshop=api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562383713084&act=goods&op=goodsList`
        }).then(res => {
          this.goodslist = res.data.datas.list
        })
      } else if (this.prisort === 1) {
        this.prisort = 2
        this.sequence = 0
        axios({
          url: `/lct?provinc=110&city=110100000000&keyword=&page=${this.page++}&sorted=${this.sort}&sequence=${this.sequence}&gcId=${JSON.parse(this.$route.params.list).gcid}&workshop=api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562383713084&act=goods&op=goodsList`
        }).then(res => {
          this.goodslist = res.data.datas.list
        })
      }
    },

    getSorted_3 () {
      this.prisort = 0
      this.page = 1
      this.sort = 2
      this.sequence = 0
      axios({
        url: `/lct?provinc=110&city=110100000000&keyword=&page=${this.page++}&sorted=${this.sort}&sequence=${this.sequence}&gcId=${JSON.parse(this.$route.params.list).gcid}&workshop=api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562383713084&act=goods&op=goodsList`
      }).then(res => {
        this.goodslist = res.data.datas.list
      })
    },

    handleBack () {
      this.$router.push('/goodslist')
    },
    handleMainClick (goodsid) {
      this.$router.push({ path: `/goodsdetail/${goodsid}` })
    }
  },

  components: {
    pricesort
  }

}

</script>

<style lang="scss" scoped>

  div.selectedlist {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    div.top {
      width: 100%;
      background-color: white;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      header {
        height: .5rem;
        width: 100%;
        position: relative;
        button {
          position: absolute;
          width: .4rem;
          height: .4rem;
          background-color: red;
          border: 0;
          left: .14rem;
          top: 0;
          bottom: 0;
          margin: auto;
          background: url("/imgs/league/btn_back.png") no-repeat 0 center;
          background-size: .2rem .2rem;
        }
        h2 {
          width: 100%;
          height: 100%;
          line-height: .5rem;
          text-align: center;
          font-size: .16rem;
          color: black;
        }
      }

      nav {
        height: .3rem;
        border-bottom: 2px solid #f0f0f0;
        ul {
          height: 100%;
          display: flex;
          justify-content: space-between;
          li {
            flex: 1;
            text-align: center;
            font-size: .13rem;
            color: black;
            height: 100%;
            line-height: .3rem;
          }

          li:nth-of-type(3) {
            display: flex;
            justify-content: center;
            align-items: center;
            p {
              margin-right: .05rem;
            }
          }

          li.nav-cur {
            color: #f81234;
          }
        }
      }
    }

    main {
      background-color: #f0f0f0;
      flex: 1;
      overflow: hidden;
      position: absolute;
      top: .8rem;
      left: 0;
      z-index: 0;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li {
          width: 1.85rem;
          height: 2.45rem;
          background-color: white;
          margin-top: .04rem;

          img {
            width: 100%;
            height: 1.6rem;
            display: block;
          }

          h3 {
            height: .36rem;
            line-height: .18rem;
            font-size: .12rem;
            color: black;
            overflow: hidden;
            font-weight: 100;
            padding: .06rem .09rem 0;
          }

          p {
            height: .25rem;
            padding: 0 .07rem;
            display: flex;
            justify-content: space-between;
            span {
              height: 100%;
              line-height: .25rem;
            }
            span:nth-of-type(1) {
              font-size: .11rem;
              color: #f81234;
              padding-left: .2rem;
              background: url("/imgs/league/imoney.png") no-repeat 0 center;
              background-size: .15rem .15rem;
            }
            span:nth-of-type(2) {
              font-size: .11rem;
              color: #acacac;
              padding-right: .05rem;
            }
          }
        }
      }
    }
  }
</style>
