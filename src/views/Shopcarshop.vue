<template>

    <ul>
      <li v-for="dataGoods in data" :key="dataGoods.cart_id">
        <input type="checkbox" :value = 'dataGoods' @change="qwe()">
        <img :src="dataGoods.goods_image" alt="">
        <div>
          <h2>{{dataGoods.goods_name}}</h2>
          <div>
            <span v-for="(dataDetails,index) in dataGoods.goods_spec" :key="dataDetails[index]">{{dataDetails.sp_name}}{{dataDetails.sp_value_name}}</span>
          </div>
          <div>
            <div>
              <div>￥{{dataGoods.goods_marketprice}}</div>
              <div>￥{{dataGoods.goods_price}}</div>
            </div>
            <div>
              <span>+</span>
              <input type="text" name="" id="" :value="dataGoods.goods_num">
              <span>-</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

</template>

<script>

  export default {

    props:["data", "index"],

    data() {
      return {

      }
    }
  }

</script>

<style lang="scss" scoped>

    ul{
      &>li{
        width: 100%;
        padding: 0 .1rem;
        height: 1.11rem;
        margin-top: .05rem;
        background: #f7f7f7;
        &>input{
          height: .22rem;
          width: .22rem;
          border: 1px solid #ccc;
          border-radius: .1rem;
          float: left;
          margin-top: .44rem;
        }
        &>img{
          width: .86rem;
          height: .86rem;
          float: left;
          margin:.1rem .04rem .04rem .04rem;
        }
        &>div{
          width: 67%;
          height: 1.08rem;
          padding: .1rem 0;
          float: right;
          &>h2{
            height: .36rem;
            line-height: .18rem;
            font-weight: normal;
            font-size: .15rem;
            overflow: hidden;
          }
          &>div:nth-of-type(1){
            height: .16rem;
            font-size: .098rem;
            overflow: hidden;
            color: #999;
          }
          &>div:nth-of-type(2){
            height: .36rem;
            font-size: .09rem;
            &>div:nth-of-type(1){
              float: left;
              width: 40%;
              &>div:nth-of-type(1){
                font-size: .12rem;
                width:.5rem;
                text-decoration: line-through;
              }
              &>div:nth-of-type(2){
                font-size: .15rem;
                width:.5rem;
                color: #f81234;
              }
            }
            &>div:nth-of-type(2){
              float: right;
              &>span{
                width: .32rem;
                height:.32rem;
                line-height: .30rem;
                border: 1px solid #ccc;
                text-align: center;
              }
              &>input{
                border: 1px solid #ccc;
                outline: none;
                width: .4rem;
                height: .32rem;
                line-height: .30rem;
                vertical-align: top;
                text-align: center;
              }
            }
          }
        }
      }
    }

</style>
