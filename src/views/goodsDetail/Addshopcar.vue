<template>
  <div class="add-shop-car">
    <div class="mask" @click="handleMaskClick">

    </div>

    <div class="content">
      <div class="asc-header">
        <img :src="mydata.goods_info.goods_image" alt="">
        <div>
          <p>
            <span>¥{{ mydata.goods_info.goods_price }}</span>
            <button @click="handleMaskClick">x</button>
          </p>
          <p>库存500件</p>
          <p>
            <span>已选:</span>
            <span>{{ mydata.goods_info.goods_name }}</span>
          </p>
        </div>
      </div>

      <div class="selec">
        <p>已选择</p>
        <p>{{ mydata.goods_info.goods_name }}</p>
        <p>
          <span @click="handleSpanClick(-1)">-</span>
          <span>{{ selectCount }}</span>
          <span @click="handleSpanClick(1)">+</span>
        </p>
      </div>

      <div class="total">
        <p>最小起订量为1套</p>
        <p>已选<span>{{ selectCount }}</span>件</p>
        <p><span>{{ selectCount * mydata.goods_info.goods_price }}</span>元</p>
      </div>

      <div class="sure" @click="handleMaskClick">
        确认
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        selectCount: 1
      }
    },

    props: ["mydata"],

    methods: {
      handleSpanClick(data) {
        this.selectCount += data;
        if (this.selectCount <= 1) {
          this.selectCount = 1;
        }
      },

      handleMaskClick() {
        this.$store.state.isHiddenAddshopcar = false
      },
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

  div.add-shop-car {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    div.mask {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    div.content {
      height: 4.17rem;
      width: 100%;
      background-color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;

      div.asc-header {
        height: 1.01rem;
        border-bottom: 1px solid #eaeaea;
        display: flex;
        position: relative;
        img {
          width: 1.06rem;
          height: 1.06rem;
          border-radius: .1rem;
          border: 1px solid #eaeaea;
          position: absolute;
          top: -0.2rem;
          left: .08rem;
        }

        &>div {
          height: 100%;
          position: absolute;
          left: 1.2rem;
          top: 0;

          p:nth-of-type(1) {
            font-size: .15rem;
            color: #f81234;
            font-weight: bold;
            height: .33rem;
            line-height: .33rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
              width: .2rem;
              height: .2rem;
              border: 0;
              background-color: white;
              font-size: .2rem;
              color: #f81234;
              margin-right: .1rem;
            }
          }

          p:nth-of-type(2) {
            height: .22rem;
            line-height: .22rem;
            font-size: .12rem;
            color: #808080;
          }

          p:nth-of-type(3) {
            line-height: .17rem;
            height: .34rem;
            font-size: .12rem;
            color: #333;
            padding-right: .1rem;
            overflow: hidden;
          }

        }
      }

      div.selec {
        height: .56rem;
        border-bottom: 1px solid #eaeaea;
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;

        p:nth-of-type(1) {
          width: .65rem;
          font-size: .15rem;
          color: #333;
          text-align: center;
        }

        p:nth-of-type(2) {
          width: 1.6rem;
          line-height: .18rem;
          font-size: .12rem;
          color: #333;
          text-align: left;
          padding-right: .3rem;
          height: .36rem;
          overflow: hidden;
        }

        p:nth-of-type(3) {
          width: 1.1rem;
          display: flex;
          span {
            background-color: #f0f0f0;
            margin-right: .02rem;
            font-size: .15rem;
            color: #333;
            line-height: .3rem;
            text-align: center;
          }
          span:nth-of-type(odd) {
            width: .3rem;
            height: .3rem;
          }
          span:nth-of-type(even) {
            width: .4rem;
            height: .3rem;
          }
        }
      }

      div.total {
        display: flex;
        align-items: center;
        padding-left: .09rem;
        height: .3rem;
        background-color: #fafafa;
        position: absolute;
        bottom: .5rem;
        left: 0;
        width: 100%;
        p:nth-of-type(1) {
          font-size: .11rem;
          padding-right: 1.59rem;
          color: black;
        }
        p:nth-of-type(2) {
          font-size: .11rem;
          color: #f81234;
          border-right: 1px solid #c8c8c8;
          padding-right: .07rem;
          height: .12rem;
          line-height: .12rem;
          span {
            padding: 0 .05rem;
            color: black;
          }
        }
        p:nth-of-type(3) {
          padding-left: .07rem;
          font-size: .11rem;
          color: #f81234;
          span {
            padding-right: .07rem;
            width: .28rem;
            overflow: hidden;
          }
        }
      }

      div.sure {
        height: .5rem;
        width: 100%;
        background-color: #f64750;
        line-height: .5rem;
        text-align: center;
        font-size: .15rem;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
      }

    }
  }
</style>
