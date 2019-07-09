<template>
  <div class="person">
    <header>
      <div>
        <img src="/imgs/league/member_avatar_2x.png" alt="">
      </div>
      <p>lct_13147170456</p>
      <span @click="handleSpanClick"></span>
    </header>

    <nav>
      <p>
        <span>我的订单</span>
        <span>查看全部订单</span>
      </p>
      <ul>
        <li>
          <img src="/imgs/league/icon_gerenzhongixndaifukuan.png" alt="">
          <p>待付款</p>
          <span>0</span>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxindaihouhuo.png" alt="">
          <p>代发货</p>
          <span>0</span>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxindaishouhuo.png" alt="">
          <p>待收货</p>
          <span>0</span>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxintuihuo.png" alt="">
          <p>退款退货</p>
          <span>0</span>
        </li>
      </ul>
    </nav>

    <main>
      <ul>
        <li>
          <img src="/imgs/league/icon_gerenzhongxin_jidan.png" alt="">
          <p>我的集单</p>
          <p></p>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxinshouhuodizhi.png" alt="">
          <p>收货地址</p>
          <p>管理地址信息</p>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxin_kaquanbao.png" alt="">
          <p>卡券包</p>
          <p>红包</p>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxinzhanghuyue.png" alt="">
          <p>账户余额</p>
          <p></p>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxinlianxidaianhua_password.png" alt="">
          <p>支付密码</p>
          <p>设置﹑管理支付密码</p>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxinlianxidaianhua.png" alt="">
          <p>联系电话</p>
          <p>400-088-0692</p>
        </li>

        <li>
          <img src="/imgs/league/icon_gerenzhongxinyjianfankui.png" alt="">
          <p>意见反馈</p>
          <p></p>
        </li>
      </ul>

      <ul>
        <li>
          <img src="/imgs/league/img_kehuduan.png" alt="">
          <p>客户端</p>
        </li>

        <li>
          <img src="/imgs/league/img_diannaoban.png" alt="">
          <p>电脑版</p>
        </li>

        <li>
          <img src="/imgs/league/img_guanwang.png" alt="">
          <p>乐村淘官网</p>
        </li>
      </ul>
    </main>


  </div>
</template>

<script>

  export default {
    methods: {
      handleSpanClick() {
        this.$router.push("/setting")
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

  div.person {
    header {
      height: 2rem;
      width: 100%;
      background: url("/imgs/league/bg_gerenzhongxinbeijing.png") no-repeat center;
      background-size: contain;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &>div {
        width: .77rem;
        height: .77rem;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }

      &>p {
        height: .46rem;
        line-height: .46rem;
        font-size: .16rem;
        color: white;
      }

      &>span {
        position: absolute;
        width: .18rem;
        height: .18rem;
        background: url("/imgs/league/icon_mine_set.png") no-repeat center;
        background-size: contain;
        right: .2rem;
        top: .2rem;
      }
    }

    nav {
      height: 1.35rem;
      border-bottom: .1rem solid #f0f0f0;
      &>p {
        height: .51rem;
        border-bottom: 1px solid #ccc;
        background: url("/imgs/league/icon_wodedingdanjiantou.png") no-repeat 3.54rem center;
        background-size: .11rem .11rem;
        display: flex;
        align-items: center;
        font-size: .13rem;
        padding-left: .09rem;
        span:nth-of-type(1) {
          color: #333;
          padding-right: 1.86rem;
        }
        span:nth-of-type(2) {
          color: #b2b2b2;
        }
      }

      &>ul {
        height: .74rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;

          img {
            width: .3rem;
          }

          p {
            font-size: .13rem;
            color: #333;
            padding-top: .05rem;
          }

          span {
            position: absolute;
            width: .19rem;
            height: .22rem;
            border: 1px solid #cdcbcb;
            line-height: .22rem;
            text-align: center;
            background-color: #f81234;
            font-size: .09rem;
            border-radius: .05rem;
            top: .05rem;
            right: .27rem;
          }
        }
      }
    }

    main {
      margin-bottom: .3rem;
      ul:nth-of-type(1) {
        li {
          height: .51rem;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          padding-left: .09rem;
          background: url("/imgs/league/icon_wodedingdanjiantou.png") no-repeat 3.54rem center;
          background-size: .11rem .11rem;
          position: relative;
          img {
            width: .18rem;
          }
          p {
            font-size: .13rem;
          }
          p:nth-of-type(1) {
            color: #333;
            padding-left: .1rem;
          }
          p:nth-of-type(2) {
            position: absolute;
            right: .3rem;
            line-height: .74rem;
            color: #b2b2b2;
          }
        }
        li:nth-of-type(3),li:nth-of-type(5) {
          border-bottom: .1rem solid #f0f0f0;
        }
      }

      ul:nth-of-type(2) {
        height: 1.1rem;
        display: flex;
        justify-content: space-between;
        li {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          img {
            width: .35rem;
          }
          p {
            font-size: .11rem;
            color: black;
          }
        }
      }
    }


  }


</style>
