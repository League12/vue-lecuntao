<template>
  <div class="swiper-container s2">
    <div class="swiper-wrapper nav">
      <div class="swiper-slide" @click="leclick">
        <img
          src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/nhj_icon/icon_index_leliuji.jpg?date=20190708"
          alt
        /> 乐6集
      </div>
      <div class="swiper-slide" @click="pavilion">
        <img
          src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/nhj_icon/icon_index_teseguan.jpg?date=20190708"
          alt
        /> 特色馆
      </div>
      <div class="swiper-slide" @click="countyclick">
        <img
          src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/nhj_icon/icon_index_lexianyu.jpg?date=20190708"
          alt
        /> 乐县域
      </div>
      <div class="swiper-slide" @click="handleDivClick">
        <img
          src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/nhj_icon/icon_fp_icon.jpg?date=20190708"
          alt
        /> 特色扶贫
      </div>
      <div class="swiper-slide" @click="handleDivClick">
        <img
          src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/nhj_icon/iconFupin.jpg?date=20190708"
          alt
        /> 广东优品
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Swiper from "swiper"; // js
import "swiper/dist/css/swiper.css";

import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  mounted() {
    var swiper = new Swiper(".s2", {
      slidesPerView: 4.7,
      spaceBetween: 30,
      freeMode: true
    });
  },
  methods: {
    leclick() {
      this.$router.push(`/leliuji`);
    },
    pavilion() {
      this.$router.push(`/features`);
    },
    countyclick() {
      // console.log("aaaaaaaa")
      this.$router.push(`/county`);
  },
handleDivClick() {
      this.$router.push('/lecuntaolea');
    }
  },

  
};
</script>
<style lang="scss" scoped>
.swiper-container {
  & > .nav {
    width: 100%;
    height: 1rem;
    div.swiper-slide {
      width: 0.83rem;
      font-size: 13px;
      color: #555;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 40px;
      }
    }
  }
}
</style>
