<template>
  <div class="setting-header">
    <header>
      <button @click="handleBack"></button>
      <h2>我的订单</h2>
    </header>
  </div>
</template>

<script>

export default {
  methods: {
    handleBack () {
      this.$router.push('/person')
    }
  }
}
</script>

<style lang="scss" scoped>
  div.setting-header {

    * {
      box-sizing: border-box;
    }

    img {
      display: block;
    }

    header {
      height: .5rem;
      width: 100%;
      position: relative;
      button {
        position: absolute;
        width: .4rem;
        height: .4rem;
        background-color: red;
        border: 0;
        left: .14rem;
        top: 0;
        bottom: 0;
        margin: auto;
        background: url("/imgs/league/btn_back.png") no-repeat 0 center;
        background-size: .2rem .2rem;
      }
      h2 {
        width: 100%;
        height: 100%;
        line-height: .5rem;
        text-align: center;
        font-size: .16rem;
        color: black;
      }
    }
  }
</style>
