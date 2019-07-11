<template>
  <div>
    <div class="bazaar">
      <img src="https://m.lecuntao.com/resource/images/details/rightward.png?lv=c01b8c54c9" alt @click="previous"/>
      <p @click="previous">返回</p>
      <P>乐6集</P>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        previous(){
            window.history.back(-1)
        }
    }
}
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
    font-size: .17rem;
  }
  p:nth-of-type(2) {
      position: absolute;
    line-height: 0.48rem;
    width: 100px;
    text-indent: 0.38rem;
    font-size: .18rem;
    left: 0;
    right: 0;
    margin: auto;
    color: #f81234
  }
}
</style>
