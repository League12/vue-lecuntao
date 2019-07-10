<template>
  <div class="detailheader">
    <button @click="handlebtnClick"></button>
    <ul>
      <li @click="handleClick(0)"><a href="#a1" :class="(isActive === 0) ? 'active' : ''">商品</a></li>
      <li @click="handleClick(1)"><a href="#a2" :class="(isActive === 1) ? 'active' : ''">详情</a></li>
      <li @click="handleClick(2)"><a href="#a3" :class="(isActive === 2) ? 'active' : ''">推荐</a></li>
      <li @click="handleClick(3)" :class="(isActive === 3) ? 'active' : ''">营业执照</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 0
    }
  },

  methods: {
    handleClick (data) {
      this.isActive = data
    },
    handlebtnClick () {
      window.history.back(-1);
    }
  }
}
</script>

<style lang="scss" scoped>

  * {
    box-sizing: border-box;
  }

  div.detailheader {
    height: .46rem;
    display: flex;
    align-items: center;
    padding-left: .11rem;
    border-bottom: 1px solid #d8d8d8;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
    button {
      width: .2rem;
      height: .2rem;
      border: 0;
      background: url("/imgs/league/btn_back.png") no-repeat center;
      background-size: .2rem .2rem;
    }
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: .15rem;
      li {
        height: 100%;
        a {
          display: block;
          height: 100%;
          padding: 0 .2rem;
          line-height: .46rem;
          font-size: .12rem;
          color: black;
          text-decoration: none;
        }
        a.active {
          border-bottom: 2px solid #333;
        }
      }
      li:nth-of-type(4) {
        height: 100%;
        padding: 0 .2rem;
        line-height: .46rem;
        font-size: .12rem;
        color: black;
      }
      li.active {
        border-bottom: 2px solid #333;
      }
    }
  }
</style>
