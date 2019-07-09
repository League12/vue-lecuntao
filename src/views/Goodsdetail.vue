<template>
  <div class="goodsdetail" v-if="datalist" id="a1">
    <detailheader></detailheader>

    <div class="banner" v-if="datalist">
      <img :src="datalist.goods_info.goods_image" alt="">
    </div>

    <div class="info" v-if="datalist">
      <h2>
        <p>{{ datalist.goods_info.goods_name }}</p>
        <p>
          <img src="/imgs/league/icon_QRcode2.png" alt="">
          <span>二维码</span>
        </p>
      </h2>

      <p>
        <span>¥{{ datalist.goods_info.goods_price }}</span>
        <span>¥{{ datalist.goods_info.goods_marketprice }}</span>
      </p>

      <p>{{ datalist.goods_info.fare_title }}</p>
    </div>

    <div class="sele">
      <span>请选择</span>
      <span>无</span>
      <span>1个</span>
      <span>></span>
    </div>

    <div class="shop">
      <img src="/imgs/league/default_store_logo.gif" alt="">
      <p>{{ datalist.goods_info.store_name }}</p>
    </div>

    <div class="pic-detail" id="a2">
      <p>
        查看图文详情
      </p>

      <ul>
        <li v-for="img in datalist.img_list">
          <img :src="img.goods_image" alt="">
        </li>
      </ul>
    </div>

    <recommand4you id="a3"></recommand4you>

    <goodsdetailfooter></goodsdetailfooter>

    <transition name="fade" mode="in-out">
      <addshopcar :mydata="datalist" v-if="$store.state.isHiddenAddshopcar"></addshopcar>
    </transition>


  </div>
</template>

<script>

  import axios from "axios";
  import detailheader from './goodsDetail/detailheader';
  import recommand4you from './goodsDetail/Recommand4you';
  import goodsdetailfooter from './goodsDetail/Detailfooter';
  import addshopcar from './goodsDetail/Addshopcar';

  export default {

    data() {
      return {
        datalist: null
      }
    },

    mounted() {
      this.$store.state.isHiddenFooterbar = false;
        axios({
          url : `/test.json`,
          methods: "get",
        }).then(res => {
          this.datalist = res.data[this.getRandom(0, 10)].datas;
        });
      //   location.assign(`https://m.lecuntao.com/tpl/goods/index.html?goods_id=${this.$route.params.gcid}`);
      },


    destroyed () {
      this.$store.state.isHiddenFooterbar = true
    },

    components: {
      detailheader,
      recommand4you,
      goodsdetailfooter,
      addshopcar
    },

    methods: {
      getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
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

  div.goodsdetail {
    width: 100%;

    div.banner {
      width: 100%;
      height: 3.75rem;
      border-bottom: 1px solid #f3f3f3;
      img {
        width: 100%;
        height: 100%;
      }
    }

    div.info {
      width: 100%;
      height: 1.38rem;
      border-bottom: 4px solid #f0f0f0;
      padding-top: .11rem;
      h2 {
        height: .43rem;
        line-height: .21rem;
        font-size: .14rem;
        padding-left: .09rem;
        display: flex;
        align-items: center;

        p:nth-of-type(1) {
          width: 2.9rem;
          font-weight: 100;
          color: #252525;
        }

        p:nth-of-type(2) {
          padding-left: .25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          img {
            width: .18rem;
            height: .18rem;
          }
          span {
            height: .24rem;
            line-height: .24rem;
            font-size: .1rem;
            color: #808080;
            font-weight: 100;
          }
        }
      }

      &>p:nth-of-type(1) {
        height: .45rem;
        padding-top: .19rem;
        padding-left: .06rem;
        span:nth-of-type(1) {
          font-size: .2rem;
          color: #ff4b4b;
        }
        span:nth-of-type(2) {
          font-size: .09rem;
          color: #808080;
          text-decoration: line-through;
          padding-left: .06rem;
        }
      }

      &>p:nth-of-type(2) {
        height: .35rem;
        padding-left: .09rem;
        line-height: .35rem;
        font-size: .11rem;
        color: #808080;
      }
    }

    div.sele {
      height: .62rem;
      display: flex;
      align-items: center;
      padding-left: .09rem;
      border-bottom: .12rem solid #f0f0f0;
      span:nth-of-type(1) {
        font-size: .13rem;
        color: #808080;
        padding-right: .1rem;
      }
      span:nth-of-type(2) {
        font-size: .13rem;
        color: #333;
        padding-right: 2.21rem;
      }
      span:nth-of-type(3) {
        font-size: .13rem;
        font-weight: bold;
        color: #333;
        padding-right: .36rem;
      }
      span:nth-of-type(4) {
        font-size: .13rem;
        color: #cfcfcf;
      }
    }

    div.shop {
      height: .54rem;
      border-bottom: .04rem solid #f0f0f0;
      display: flex;
      align-items: center;
      padding-left: .1rem;

      img {
        height: .26rem;
        width: .72rem;
        border: 1px solid #e3e3e3;
      }

      p {
        line-height: .2rem;
        font-size: .12rem;
        color: #333;
        padding-left: .1rem;
      }

    }

    div.pic-detail {
      &>p:nth-of-type(1) {
        height: .69rem;
        margin-top: .06rem;
        background-color: #f0f0f0;
        line-height: .69rem;
        font-size: .12rem;
        color: #bababa;
        text-align: center;
      }
      ul {
        li {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1.5s;
  }
  .fade-enter, .fade-leave-to {
    transform: translateY(100%);
  }
</style>
