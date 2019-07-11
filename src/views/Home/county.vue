<template>
  <div>
    <div class="bazaar">
      <img
        src="https://m.lecuntao.com/resource/images/details/rightward.png?lv=c01b8c54c9"
        alt
        @click="previous"
      />
      <p @click="previous">返回</p>
      <P>乐县域</P>
    </div>
    <div class="dwn">
      <img src="../../imgs/logo_lexianyu.png" alt />
      <p>乐县域是服务乐县域商家进货的平台</p>
      <p>如果您需进货,可以通过以下方式获取乐县域app</p>
      <p>免费获取APP</p>
      <img src="../../imgs/img_lexianyu.png" alt />
    </div>
  </div>
</template>
<script>
export default {
    mounted(){
        this.$store.commit("toggleFooterbar",false)
    },
  methods: {
    previous() {
      window.history.back(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.bazaar {
  width: 100%;
  height: 0.48rem;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #ccc;
  img {
    width: 0.12rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-right: 8px;
    margin-left: 15px;
  }
  p:nth-of-type(1) {
    position: absolute;
    line-height: 0.48rem;
    width: 100px;
    text-indent: 0.38rem;
    font-size: 0.17rem;
  }
  p:nth-of-type(2) {
    position: absolute;
    line-height: 0.48rem;
    width: 100px;
    text-indent: 0.38rem;
    font-size: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    color: #f81234;
  }
}
.dwn {
  width: 100%;
  background: #97fcff;
  height: 5.2rem;
  position: relative;
  img:nth-of-type(2) {
    width: 100%;
    position: absolute;
  }
  img:nth-of-type(1) {
    width: 1.49rem;
    margin: auto;
    position: absolute;
    top: 0.47rem;
    left: 0;
    right: 0;
    margin: auto;
  }
  p:nth-of-type(1) {
    position: absolute;
    width: 100%;
    top: 1rem;
    text-align: center;
    font-size: 0.156rem;
    color: #000;
    font-weight: bold;
  }
  p:nth-of-type(2) {
    position: absolute;
    width: 100%;
    top: 1.3rem;
    text-align: center;
    font-size: 0.156rem;
    color: #000;
    font-weight: bold;
  }
  p:nth-of-type(3) {
    position: absolute;
    width: 2.48rem;
    height: 0.48rem;
    top: 2.5rem;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    background: #f81234;
    font-size: .23rem;
    color: #fff;
    line-height: .48rem;
    border-radius: .24rem;
    z-index: 2;
  }
}
</style>
