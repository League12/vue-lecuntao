<template>
  <div class="order" ref="myorder">
    <orderheader></orderheader>

    <nav>
      <ul>
        <router-link to="/order/all" tag="li" active-class="active">全部</router-link>
        <router-link to="/order/orderpayment" tag="li" active-class="active">待付款</router-link>
        <router-link to="/order/orderdelivergoods" tag="li" active-class="active">待发货</router-link>
        <router-link to="/order/orderreceivinggoods" tag="li" active-class="active">待收货</router-link>
        <router-link to="/order/orderfinal" tag="li" active-class="active">已完成</router-link>
      </ul>
      <p></p>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>


  import orderheader from './order/Orderheader';

  export default {

    data() {
      return {
        isActive: ''
      }
    },

    mounted() {
      this.isActive = this.$route.params.order;
      this.$store.state.isHiddenFooterbar = false;
      this.$refs.myorder.style.height = window.innerHeight + 'px';
    },

    methods: {
      handleLiClick(data) {
        this.isActive = data + '';
      }
    },

    components: {
      orderheader
    },

    destroyed () {
      this.$store.state.isHiddenFooterbar = true;
    }
  }


</script>

<style lang="scss" scoped>
  div.order {

    display: flex;
    flex-direction: column;

    * {
      box-sizing: border-box;
    }

    img {
      display: block;
    }


    nav {
      height: .8rem;
      ul {
        display: flex;
        height: .4rem;
        width: 100%;
        padding: 0 0.09rem;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 2px solid #f0f0f0;
        li {
          height: 0.38rem;
          line-height: .38rem;
          flex: 1;
          text-align: center;
          font-size: .12rem;
          color: #333;
        }
        li.active {
          color: #f81234;
          border-bottom: 1px solid #f81234;
        }
      }
      p {
        height: .4rem;
        color: white;
      }
    }


  }
</style>
