<template>
  <div class="sss">
    <div class="swiper-container" ref="mynavlist" :class="islist?'navlist':''">
      <div class="swiper-wrapper nav">
        <div
          class="swiper-slide"
          v-for="(data,index) in datalist"
          :key="data.gc_id"
          @click="handleClick(index)"
          :class="(isActive === index) ? 'active' + index : ''"
          ref="myactive">
          <p>
            <img :src="data.cate_image" alt />
            {{data.cate_name}}
          </p>
        </div>
      </div>
    </div>
    <electricity class="sssss" ref="mylist" id="ann0"></electricity>
    <food id="ann1"></food>
    <rice></rice>
    <clothing></clothing>
    <necessities></necessities>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { Swipe, SwipeItem } from 'mint-ui'
import electricity from '@/views/Home/navlist/electricity'
import food from '@/views/Home/navlist/food'
import rice from '@/views/Home/navlist/rice'
import necessities from '@/views/Home/navlist/necessities'
import clothing from '@/views/Home/navlist/clothing'

export default {
  data () {
    return {
      datalist: [],
      isActive: 0,
      islist: false
    }
  },
  components: {
    electricity,
    food,
    rice,
    necessities,
    clothing
  },

  mounted () {
    axios({
      url:
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562577964385&act=index&op=index&key='
    }).then(res => {
      this.datalist = res.data.datas.category
      this.$nextTick(() => {
        var swiper = new Swiper('.navlist', {
          slidesPerView: 5,
          spaceBetween: 0,
          freeMode: true
        })
      })
    })
    window.addEventListener('scroll', this.handleScroll, false)
  },

  methods: {
    handleClick (index) {
      this.isActive = index
      if (index === 1) {
        document.documentElement.scrollTop = 1436
      } else if (index === 2) {
        document.documentElement.scrollTop = 1987
      } else if (index === 3) {
        document.documentElement.scrollTop = 2538
      } else if (index === 4) {
        document.documentElement.scrollTop = 3087
      }else if (index === 0) {
        document.documentElement.scrollTop = 883 
      }
    },
    handleScroll () {
      if (
        document.documentElement.scrollTop > 878 &&
        document.documentElement.scrollTop < 1436
      ) {
        this.isActive = 0
      } else if (
        document.documentElement.scrollTop > 1436 &&
        document.documentElement.scrollTop < 1987
      ) {
        this.isActive = 1
      } else if (
        document.documentElement.scrollTop > 1987 &&
        document.documentElement.scrollTop < 2538
      ) {
        this.isActive = 2
      } else if (
        document.documentElement.scrollTop > 2538 &&
        document.documentElement.scrollTop < 3087
      ) {
        this.isActive = 3
      } else if (
        document.documentElement.scrollTop > 3087 &&
        document.documentElement.scrollTop < 3598
      ) {
        this.isActive = 4
      }
      if (document.documentElement.scrollTop > 878) {
        this.islist = true
      } else {
        this.islist = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 0.47rem;
  border-top: 1px solid #ccc;
  div {
    width: 0.75rem;
    height: 0.23rem;
    font-size: 0.14rem;
    margin: 0.12rem 0;
    p {
      width: 100%;
      text-align: center;
      img {
        width: 0.08rem;
      }
    }
  }
}
.active0 {
  background: #ff788b;
  color: #fff;
  border-radius: 3rem;
}
.active1 {
  background: #568bfc;
  color: #fff;
  border-radius: 3rem;
}
.active2 {
  background: #ffa272;
  color: #fff;
  border-radius: 3rem;
}
.active3 {
  background: #bf71fc;
  color: #fff;
  border-radius: 3rem;
}
.active4 {
  background: #ff78a9;
  color: #fff;
  border-radius: 3rem;
}
.navlist {
  position: fixed;
  left: 0px;
  top: 40px;
  width: 100%;
  height: 40px;
  background: white;
  z-index: 10;
}
</style>
