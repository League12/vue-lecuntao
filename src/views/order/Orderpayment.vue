<template>
  <div class="payment">
    <main>
      <img src="/imgs/league/img_eodedingdan_no.png" alt="">
      <h2>您还没有相应的订单</h2>
      <p>可以去看看有哪些想买的</p>
    </main>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  div.payment {
    flex: 1;
    background-color: #f0f0f0;

    main {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 2rem;
        height: 2rem;
      }
      h2 {
        font-size: .16rem;
        color: #808080;
        font-weight: 100;
      }
      p {
        font-size: .12rem;
        color: #b2b2b2;
        height: .32rem;
        line-height: .32rem;
      }
    }
  }

</style>
