<template>
  <div class="price-sort">
    <div :class="`t${(mysort === 1) ? ' act' : ''}`">

    </div>
    <div :class="`b${(mysort === 2) ? ' act2' : ''}`">

    </div>
  </div>
</template>

<script>

export default {
  props: ['mysort'],

  data () {
    return {
      current: 0
    }
  }
}

</script>

<style lang="scss" scoped>
  div.price-sort {
    width: .08rem;
    height: .16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.t {
      width: .08rem;
      height: .05rem;
      background: url("/imgs/league/icon_top_gray.png") no-repeat center;
      background-size: .08rem .05rem;
    }

    div.b {
      width: .08rem;
      height: .05rem;
      background: url("/imgs/league/icon_down_gray.png") no-repeat center;
      background-size: .08rem .05rem;
    }

    div.act {
      background: url("/imgs/league/icon_top_red.png") no-repeat center;
      background-size: .08rem .05rem;
    }

    div.act2 {
      background: url("/imgs/league/icon_down_red.png") no-repeat center;
      background-size: .08rem .05rem;
    }
  }
</style>
