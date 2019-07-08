<template>
  <div id="app">
    <router-view></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>

import axios from 'axios'
import footerbar from './views/Footerbar'

export default {
  // mounted () {
  //   axios.get("/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562315736581&act=goods&op=hotWord").then(res => {
  //
  //     console.log(res)
  //
  //   })
  // },

  components: {
    footerbar
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
