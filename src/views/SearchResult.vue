<template>
    <div class="searchResult">
        <div><input type="text" name="" id="" v-model="searchText" @click="goSearch()"><span @click="goHome()">取消</span></div>
        <ul>
            <li @click="all()" :class = "sorted === 4?'fonred':''">全部</li>
            <li @click="sell()" :class = "sorted === 1?'fonred':''">销量优先</li>
            <li @click="price()">价格<span><span :class="sequence === 1?'no_1':'yes_1'"></span><span :class="sequence === 0 && sorted === 3?'no_2':'yes_2'"></span></span></li>
            <li>筛选</li>
        </ul>
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="30"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        >
            <li v-for="data in datalist" :key="data.goods_id" @click="goGood(data.goods_id)">
                <img :src="data.goods_image" alt="">
                <div>
                    <h2 v-html="data.goods_name" ></h2>
                    <h3><i></i>{{data.goods_price}}<span>{{data.goods_salenum}}人付款</span></h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      searchText: localStorage.getItem('searchResult'),
      loading: false,
      current: 1,
      sorted: 4,
      sequence: 0
    }
  },
  mounted () {
    this.qwe()
    this.$store.state.isHiddenFooterbar = false
  },
  destroyed () {
    this.$store.state.isHiddenFooterbar = true
  },
  methods: {
    qwe () {
      axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562728533342&act=goods&op=goodsList',
        `provinc=110&city=110100000000&keyword=${encodeURIComponent(localStorage.getItem('searchResult'))}&page=1&coupon_id=&sorted=${this.sorted}&sequence=${this.sequence}&start_price=0&ent_price=0&goods_from=0&key=&store_id=`
      ).then(res => {
        this.datalist = res.data.datas.list
      })
    },
    loadMore () {
      this.loading = true
      this.current++
      axios.post(
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562728533342&act=goods&op=goodsList',
        `provinc=110&city=110100000000&keyword=${encodeURIComponent(localStorage.getItem('searchResult'))}&page=${this.current}&coupon_id=&sorted=${this.sorted}&sequence=${this.sequence}&start_price=0&ent_price=0&goods_from=0&key=&store_id=`
      )
        .then(res => {
          this.datalist = [...this.datalist, ...res.data.datas.list]
          this.loading = false
        })
    },
    goSearch () {
      this.$router.push('/search')
    },
    goHome () {
      this.$router.push('/home')
    },
    goGood (id) {
      this.$router.push(`/goodsdetail/${id}`)
    },
    all () {
      this.sorted = 4,
      this.sequence = 0
      this.qwe()
    },
    sell () {
      this.sorted = 1,
      this.sequence = 0
      this.qwe()
    },
    price () {
      if (this.sequence === 0) {
        this.sorted = 3,
        this.sequence = 1
        this.qwe()
      } else {
        this.sorted = 3,
        this.sequence = 0
        this.qwe()
      }
    }
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
    .fonred{
        color:#f81234;
    }
    .yes_1{
        background: url(/yzy_imgs/icon_top_gray.png) no-repeat center;
        background-size: 70%;
    }
    .no_1{
        background: url(/yzy_imgs/icon_top_red.png) no-repeat center;
        background-size: 70%;
    }
    .yes_2{
        background: url(/yzy_imgs/icon_down_gray.png) no-repeat center;
        background-size: 70%;
    }
    .no_2{
        background: url(/yzy_imgs/icon_down_red.png) no-repeat center;
        background-size: 70%;
    }
    .searchResult{
        font-size: .15rem;
        &>div{
            height:.6rem;
            position: fixed;
            z-index: 10;
            top:0;
            width:100%;
            background: #fff;
            &>input{
                width: 3rem;
                height: .3rem;
                outline: none;
                border: none;
                margin: .15rem 0 0 3.5%;
                padding-left: 5%;
                vertical-align: top;
                background: #f2f2f2;
                border-radius: .15rem;
            }
            &>span{
                display: inline-block;
                width: .28rem;
                height: .4rem;
                margin-left: 3%;
                margin-top: 0.2rem;
                font-size: .14rem;
            }
        }
        &>ul:nth-of-type(1){
            height: .45rem;
            width: 100%;
            position: fixed;
            z-index: 10;
            top:.6rem;
            &>li{
                width: 25%;
                height: 100%;
                float: left;
                text-align: center;
                line-height: .45rem;
                background: #fff;
                &>span{
                    width: .2rem;
                    display: inline-block;
                    vertical-align: middle;
                    &>span{
                    width: .2rem;
                    height: .13rem;
                    display: block;
                    }
                }
            }
        }
        &>ul:nth-of-type(2){
          margin-top:1.05rem;
            &>li{
                height: 1.25rem;
                border-bottom: 1px solid #ccc;
                &>img{
                    width: 1.2rem;
                    height: 1.2rem;
                    float: left;
                }
                &>div{
                    width: 2.25rem;
                    height: 1.22rem;
                    padding: .15rem .1rem .1rem .1rem;
                    float: left;
                    &>h2{
                        width: 2.05rem;
                        height: .42rem;
                        line-height: .21rem;
                        font-size: .15rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: break-word;
                        font-weight: normal;
                        &>.goods_red{
                            color: #f81234;
                            font-style: normal;
                        }
                    }
                    &>h3{
                        height: .2rem;
                        width: 2.05rem;
                        margin-top:.35rem;
                        font-weight: normal;
                        color: #f81234;
                        font-size: .18rem;
                        &>i{
                            height: .15rem;
                            width:.15rem;
                            background: url(/yzy_imgs/imoney.png) no-repeat;
                            background-size: contain;
                            display: inline-block;
                        }
                        &>span{
                            width: 1rem;
                            display: block;
                            float: right;
                            height: 100%;
                            color: #808080;
                            font-size: .14rem;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
</style>
