<template>
  <div class="footerbar">
    <ul>
      <router-link tag="li" to="/home" active-class="active-cla">
        <span></span><p>首页</p>
      </router-link>
      <router-link tag="li" to="/goodslist" active-class="active-cla">
        <span></span><p>分类</p>
      </router-link>
      <router-link tag="li" to="/shopcar" active-class="active-cla">
        <span></span><p>购物车</p>
      </router-link>
      <router-link tag="li" to="/person" active-class="active-cla">
        <span></span><p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  div.footerbar {
    z-index: 2;
    height: .5rem;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    ul {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        flex: 1;
        height: 100%;
        line-height: .5rem;
        text-align: center;
        font-size: .1rem;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        span {
          width: .24rem;
          height: .24rem;
          background: url("/imgs/league/icon_shouye_normal.png") no-repeat center;
          background-size: 100% 100%;
        }
        p {
          height: .2rem;
          line-height: .2rem;
        }
      }
      li:nth-of-type(2) {
        span {
          background: url("/imgs/league/icon_fenlei_normal.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
      li:nth-of-type(3) {
        span {
          background: url("/imgs/league/icon_gouwuche_normal.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
      li:nth-of-type(4) {
        span {
          background: url("/imgs/league/icon_wode_normal.png") no-repeat center;
          background-size: 100% 100%;
        }
      }

      li.active-cla {
        p {
          color: #f91e36;
        }
      }

      li.active-cla:nth-of-type(1) {
        span {
          background: url("/imgs/league/icon_shouye_click.png") no-repeat center;
          background-size: 100% 100%;
        }
      }

      li.active-cla:nth-of-type(2) {
        span {
          background: url("/imgs/league/icon_fenlei_click.png") no-repeat center;
          background-size: 100% 100%;
        }
      }

      li.active-cla:nth-of-type(3) {
        span {
          background: url("/imgs/league/icon_gouwuche_click.png") no-repeat center;
          background-size: 100% 100%;
        }
      }

      li.active-cla:nth-of-type(4) {
        span {
          background: url("/imgs/league/icon_wode_click.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>
