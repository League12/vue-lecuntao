<template>
  <div class="footerbar">
    <ul>
      <router-link tag="li" to="/home"><span></span><p>首页</p></router-link>
      <router-link tag="li" to="/goodslist"><span></span><p>分类</p></router-link>
      <router-link tag="li" to="/shopcar"><span></span><p>购物车</p></router-link>
      <router-link tag="li" to="/person"><span></span><p>我的</p></router-link>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  div.footerbar {
    height: .5rem;
    width: 100%;
    background-color: orangered;
    position: fixed;
    bottom: 0;
    left: 0;
    ul {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        flex: 1;
      }
    }
  }
</style>
