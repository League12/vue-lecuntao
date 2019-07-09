<template>
  <div class="sss" >
    <div class="swiper-container navlist">
      <div class="swiper-wrapper nav">
        <div class="swiper-slide"  v-for="(data,index) in datalist"  :key="data.gc_id"  @click="handleClick(index)"  :class="(isActive === index) ? 'active' + index : ''" ref="mylist">
          <p>
            <!-- <a :href="'#ann' + index"> -->
            <img :src="data.cate_image" alt />
            {{data.cate_name}}
            <!-- </a> -->
          </p>
        </div>
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

export default {
  data () {
    return {
      datalist: [],
      isActive: 0
    }
  },

  mounted () {
    axios({
      url:
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562577964385&act=index&op=index&key='
    }).then(res => {
      //   console.log(res.data);
      this.datalist = res.data.datas.category
      //   console.log(this.datalist);
      this.$nextTick(() => {
        var swiper = new Swiper('.navlist', {
          slidesPerView: 5,
          spaceBetween: 0,
          freeMode: true
        })
      })
    })
  },

  methods: {
    handleClick (index) {
      this.isActive = index
      // console.log(this.$refs.mylist[0].offsetTop);
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
.fixed {
  position: fixed;
  left: 0px;
  top: 40px;
  width: 100%;
  height: 40px;
  background: white;
  z-index: 10;
}
</style>
