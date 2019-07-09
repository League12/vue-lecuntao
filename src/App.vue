<template>
  <div id="app">
    <router-view></router-view>
    <backtop v-show="isHiddenBacktop"></backtop>
    <footerbar v-if="this.$store.state.isHiddenFooterbar"></footerbar>
  </div>
</template>

<script>

  import axios from 'axios';
  import footerbar from './views/Footerbar';
  import backtop from './views/goodslist/Backtop';

  export default {
    data() {
      return {
        isHiddenBacktop: false
      }
    },

    mounted () {
      // axios.get("/lct?city_id=140100000000&province_id=340&goods_id=625504&key=&api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562581159800&act=mobile_goods_detail&op=getGoodsInfo").then(res => {
      //
      //   console.log(res)
      //
      // })
      window.addEventListener("scroll", this.backtop, false);
    },

    methods: {
      backtop() {
        let scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        if (scrollTop >= 2000) {
          this.isHiddenBacktop = true;
        } else if (scrollTop <= 1000) {
          this.isHiddenBacktop = false;
        }
      }
    },

    components: {
      footerbar,
      backtop
    }


  }



</script>

<style lang="scss">

  body,h1,h2,h3,h4,h5,h6,ul,ol,li,dd,dt,p,a,span,input,select,button,header,footer,nav,aside,article,main,figure
  ,figcaption,i {padding: 0;margin: 0;}

  html,body {
    height: 100%;
  }

  html {
    font-size: 100px;
  }

  body {
    font-size: 16px;
    font-family: "微软雅黑";
    color: #333;
  }

  ul,ol {
    list-style: none;
  }

  input,select,button {
    outline: none;
  }

</style>
