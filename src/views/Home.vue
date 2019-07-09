<template>
  <div>
    <div class="home">
      <homeheader></homeheader>
      <swiper>
        <div v-for="data in looplist" class="swiper-slide" :key="data.adv_id">
          <img :src="data.adv_image" />
        </div>
      </swiper>
      <navswiper></navswiper>
      <le></le>
      <tese></tese>
      <category></category>

    </div>
  </div>
</template>
<script>
import homeheader from '@/views/Home/HomeHeader'
import swiper from '@/views/Home/Swiper'
import Vue from 'vue'
import axios from 'axios'
import navswiper from '@/views/Home/navSwiper'
import le from '@/views/Home/le6'
import tese from '@/views/Home/tese'
import category from '@/views/Home/category'
export default {
  data () {
    return {
      looplist: []

    }
  },
  components: {
    homeheader,
    swiper,
    navswiper,
    le,
    tese,
    category
  },
  mounted () {
    axios({
      url:
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562395972890&act=index&op=index&key=2086cabe32a37177a677527e5d3884a8'
    }).then(res => {
      // console.log(res.data)
      this.looplist = res.data.datas.adv
      // console.log(res.data.datas.adv)
    })
  }

}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  position: relative;
  margin-bottom: 50px;
}
.header {
  display: flex;
}
</style>
