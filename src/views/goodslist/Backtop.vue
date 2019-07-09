<template>
  <div class="back2top" @click="handleClick">
    <img src="/imgs/league/return_top.png" alt="">
  </div>
</template>

<script>
export default {

  data () {
    return {
      scrolltopId: ''
    }
  },

  methods: {
    handleClick () {
      let that = this
      clearInterval(this.scrolltopId)
      this.scrolltopId = setInterval(function () {
        let scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
        if (scrollTop <= 50) {
          clearInterval(that.scrolltopId)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          return
        }
        document.documentElement.scrollTop -= 200
        document.body.scrollTop -= 200
      }, 1000 / 60)
    }
  }
}
</script>

<style lang="scss" scoped>
  div.back2top {
    width: .4rem;
    height: .4rem;
    position: fixed;
    bottom: .6rem;
    right: .3rem;
    img {
      width: 100%;
    }
  }
</style>
