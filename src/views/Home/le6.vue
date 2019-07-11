<template>
  <div class="le66">
    <div class="img">
      <img src="../../imgs/imgLe6Ji.png" alt />
      <img
        src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_llj.jpg?date=20190708"
        alt
      />
    </div>

    <div class="swiper-container s1">
      <div class="swiper-wrapper list">
        <div class="swiper-slide" v-for="data in list" :key="data.goods_id"  @click="tiaoxiangqing(data.goods_id)">
          <img :src="data.goods_image" alt />
          <p>{{data.goods_name}}</p>
          <p>{{data.goods_price}}</p>
        </div>
        <div class="swiper-slide"><img src="../../imgs/img_le6ji_see_all.png" alt /></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  data () {
    return {
      url: [],
      list: []
    }
  },
  mounted () {
    axios({ url: '/resource/images/index/imgLe6Ji.png?lv=121fc80180' }).then(
      res => {
        this.url = res.data
      }
    )
    axios({
      url:
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562563317957&act=index&op=index&key='
    }).then(res => {
      this.list = res.data.datas.le6ji.recommend_goods
      this.$nextTick(() => {
        var swiper = new Swiper('.s1', {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true
        })
      })
    })
  },
  methods: {

    tiaoxiangqing (gcid) {
      this.$router.push(`/goodsdetail/${gcid}`)
    }
  }

}
</script>
<style lang="scss" scoped>
.le66 {
  .img {
    width: 100%;
    img:nth-of-type(1) {
      width: 1.19rem;
      height: 0.15rem;
      margin: 10px 1.28rem;
    }
    img:nth-of-type(2) {
      height: 1rem;
    }
  }
}
.list {
  div {
    width: 1.07rem;
    height: 170px;
    img {
      width: 0.96rem;
      margin: 0 auto;
    }
    p:nth-of-type(1) {
      font-size: 12px;
      width: 0.87rem;
      height: 0.36rem;
      line-height: 0.18rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 0 auto;
    }
    p:nth-of-type(2) {
      font-size: 12px;
      color: red;
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
