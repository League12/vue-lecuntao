<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>

  </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.css'

import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  mounted () {
    let sw = new Swiper('.filmswiper', {
      loop: true,
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
    if (sw.$wrapperEl.length === 1) {
      sw.autoplay.running = false
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
.film-swiper-pagination {
  text-align: right;
}
</style>
