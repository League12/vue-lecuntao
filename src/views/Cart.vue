<template>
    <div class="cart">
        <header>
            <i></i>
            <span>购物车</span>
            <span></span>
        </header>
        <div v-for="(data,index) in datalist" :key="data.store_id" v-if="datalist.length">
          <div><input type="checkbox" v-model = 'alllist' :value="data" @change="handleShopCheck(index)" :ref="'shopCheck' + index">{{data[0].store_name}}</div>
          <ul>

            <li v-for="(dataGoods,ind) in data" :key="dataGoods.cart_id">

              <input type="checkbox" v-model="goodslist[index]" :value = 'dataGoods' @change="qwe(index)" :ref="'goodCheck' + index">
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

                    <span @click="red(index,ind)">-</span>
                    <input type="text" name="" id="" value="1" :ref="'goodnum' + index" disabled>
                    <span @click="add(index,ind)">+</span>

                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <footer>
            <div><input type="checkbox" @change="handleAllCheck" v-model="isCheck"><span>全选</span></div>

            <div>去结算</div>
            <div>合计：<span>￥{{priceAll}}</span></div>

        </footer>
    </div>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {
      isCheck: false,
      datalist: [],
      alllist: [],

      goodslist: [],
      priceAll: 0,
      priceAll_1: []
    }
  },
  methods: {
    red (index, ind) {
      this.$refs[`goodnum${index}`][ind].value = (parseInt(this.$refs[`goodnum${index}`][ind].value) - 1)
      if (this.$refs[`goodnum${index}`][ind].value <= 0) {
        this.$refs[`goodnum${index}`][ind].value = 1;
      }
      this.calculate()
    },
    add (index, ind) {
      this.$refs[`goodnum${index}`][ind].value = (parseInt(this.$refs[`goodnum${index}`][ind].value) + 1)
      this.calculate()
    },

    qwe (index) {

      let goodChecks = this.$refs[`goodCheck${index}`]
      let arr = []
      for (let i = 0; i < goodChecks.length; i++) {
        if (goodChecks[i].checked) {
          arr.push(111)
        }
      }
      this.$refs[`shopCheck${index}`][0].checked = (arr.length === this.datalist[index].length)
      let arr2 = []
      for (let i = 0; i < this.datalist.length; i++) {
        if (this.$refs[`shopCheck${i}`][0].checked) {
          arr2.push(222)
        }
      }
      this.isCheck = (arr2.length === this.datalist.length)
      this.calculate()
    },

    handleAllCheck () {
      for (let i = 0; i < this.datalist.length; i++) {
        this.$refs[`shopCheck${i}`][0].checked = this.isCheck

        let goodChecks = this.$refs[`goodCheck${i}`]

        for (let j = 0; j < goodChecks.length; j++) {
          goodChecks[j].checked = this.isCheck
        }
      }
      this.calculate()
    },
    handleShopCheck (index) {
      this.isCheck = (this.alllist.length === this.datalist.length)

      let goodChecks = this.$refs[`goodCheck${index}`]

      for (let i = 0; i < goodChecks.length; i++) {
        goodChecks[i].checked = this.$refs[`shopCheck${index}`][0].checked
      }
      this.calculate()
    },

    calculate () {
      let goods = []
      let num = []
      let sum = 0
      for (let i = 0; i < this.datalist.length; i++) {
        for (let j = 0; j < this.datalist[i].length; j++) {
          if (this.$refs[`goodCheck${i}`][j].checked) {
            goods.push(this.datalist[i][j])
            num.push(this.$refs[`goodnum${i}`][j].value)
          }
        }
      }

      goods.forEach((good, index) => {
        sum += parseFloat(good.goods_price) * parseFloat(num[index])
      })

      this.priceAll = Math.floor(sum);
    }

  },
  mounted () {
    axios.post(
      `/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562824638146`,
      `key=56a25119ce08e04ab90bd53e8c594b51&act=mobile_cart&op=index`
    ).then(res => {

      this.datalist = res.data.datas.cart
      this.datalist.forEach((item, index) => {
        this.datalist[index] = item.goods
        this.goodslist[index] = []
      })
    })

  }
}
</script>

<style lang="scss" scoped>
    *{
            box-sizing: border-box;
        }
    img{
        display: block;
    }
    span{
        display: inline-block;
    }
    .clickStoreColorRed{
        background: #f81234;
    }
    .cart{
        &>header{
            height: .50rem;
            position: fixed;
            top:0;
            z-index: 10;
            background: #fff;
            width: 100%;
            &>i{
                height: .2rem;
                width: .2rem;
                margin: .14rem 0 0 .1rem;
                float: left;
                background: url(/yzy_imgs/btn_back.png) no-repeat;
                background-size: .2rem;

                position: relative;
            }
            &>span:nth-of-type(1){
                position: absolute;
                left: 50%;
                transform: translateX(-50%);

                text-align: center;
                font-size: .18rem;
                line-height: .5rem;
            }
            &>span:nth-of-type(2){

                padding-left: .1rem;
                float: right;
                font-size: .17rem;
                line-height: .5rem;
            }
        }
        &>div:nth-of-type(1){
            margin-top: .5rem;
        }
        &>div:nth-last-of-type(1){
            margin-bottom: 1rem;
        }
        &>div{
            &>div{
                height: .4rem;
                padding-left: .1rem;

                line-height: .4rem;

                font-size: .14rem;
                overflow: hidden;
                position: relative;
                text-indent: .32rem;
                &>input{

                    height: .17rem;
                    width: .17rem;

                    border: 1px solid #ccc;
                    border-radius: .1rem;
                    position: absolute;
                    top:50%;
                    left: .1rem;
                    transform: translateY(-50%);
                }
            }

            &>ul{
                &>li{
                    width: 100%;
                    padding: 0 .1rem;
                    height: 1.11rem;
                    margin-top: .05rem;
                     background: #f7f7f7;
                     &>input{
                        height: .17rem;
                        width: .17rem;
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
                            line-height: .16rem;
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

        }
        &>footer{
            height: .49rem;
            width: 100%;
            border-top: 1px solid #ccc;
            position: fixed;
            bottom: .51rem;
            z-index: 10;
            background: #fff;
            div:nth-of-type(1){
                height: .48rem;
                width: .7rem;
                float: left;
                position: relative;
                margin-left:.1rem;
                &>input{

                    height: .17rem;
                    width: .17rem;

                    border: 1px solid #ccc;
                    border-radius: .1rem;
                    position: absolute;
                    top:50%;
                    left: .1rem;
                    transform: translateY(-50%);
                }
                &>span{
                    height: .48rem;
                    line-height: .48rem;
                    float: right;
                }
            }
            div:nth-of-type(3){
                float: right;
                height: .48rem;
                line-height:.48rem;
                margin-right: .1rem;

                overflow: hidden;
                width:1rem;
                &>span{
                  overflow: hidden;
                  width: .48rem;
                  float: right;
                  color: #f81234;
                }

            }
            div:nth-of-type(2){
                float: right;
                background: #fb0a84;
                width:29%;
                height: .48rem;
                color: #fff;
                line-height: .48rem;
                text-align: center;
            }
        }
    }
</style>
