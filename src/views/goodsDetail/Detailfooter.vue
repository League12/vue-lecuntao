<template>
  <div class="detail-footer">
    <ul>
      <li>
        <img src="/imgs/league/store.png" alt="">
        <span>店铺</span>
      </li>
      <li>
        <img src="/imgs/league/shgo.png" alt="">
        <span>购物车</span>
      </li>
      <li @click="handleAddClick">加入购物车</li>
      <li>立即购买</li>
    </ul>
  </div>
</template>

<script>

  export default {
    methods: {
      handleAddClick() {
        this.$store.state.isHiddenAddshopcar = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  img {
    display: block;
  }
  div.detail-footer {
    width: 100%;
    height: .51rem;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    ul {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      li {
        text-align: center;
        height: 100%;
        line-height: .5rem;
      }

      li:nth-of-type(1),li:nth-of-type(2) {
        width: .56rem;
        font-size: .09rem;
        color: #808080;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        img {
          width: .2rem;
          height: .2rem;
        }
        span {
          height: .2rem;
          line-height: .2rem;
        }
      }

      li:nth-of-type(3),li:nth-of-type(4) {
        width: 1.31rem;
        font-size: .15rem;
        color: white;
      }

      li:nth-of-type(3) {
        background-color: #ff9c00;
      }

      li:nth-of-type(4) {
        background-color: #f64750;
      }
    }
  }
</style>
