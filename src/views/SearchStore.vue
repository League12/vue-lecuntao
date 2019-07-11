<template>
    <div class="searchResult">
        <div><input type="text" name="" id="" v-model="searchText" @click="goSearch()"><span @click="goHome()">取消</span></div>
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="30"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false">
            <li v-for="data in datalist"  :key="data.store_id">
                <img :src="data.store_label" alt="">
                <h2>{{data.store_name}}</h2>
                <p>店铺评分：{{data.store_collect}}分</p>
                <p>公司名称:{{data.store_company_name}}</p>
                <p>所在地:{{data.province_name}}{{data.city_name}}{{data.county_name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui'
import Vue from 'vue'
import axios from 'axios'

Vue.use(InfiniteScroll)
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      searchText: localStorage.getItem('searchResult')
    }
  },
  methods: {
    goSearch () {
      this.$router.push('/search')
    },
    goHome () {
      this.$router.push('/home')
    },
    loadMore () {
      this.loading = true
      this.current++
      axios.post(
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562759145534&act=mobile_store&op=getStore',
        `page_num=20&page=${this.current}&store_name=${encodeURIComponent(localStorage.getItem('searchResult'))}&is_sales=1&key=`
      )
        .then(res => {
          this.datalist = [...this.datalist, ...res.data.datas.store]
          this.loading = false
        })
    }
  },
  mounted () {
    this.$store.state.isHiddenFooterbar = false
    axios.post(
      '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562756236749&act=mobile_store&op=getStore',
      `page_num=20&page=1&store_name=${encodeURIComponent(localStorage.getItem('searchResult'))}&is_sales=1&key=`
    ).then(res => {
      this.datalist = res.data.datas.store
    })
  },
  destroyed () {
    this.$store.state.isHiddenFooterbar = true
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
    .searchResult{
        font-size: .15rem;
        &>div{
            height:.48rem;
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
        &>ul{
            margin-top: .48rem;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            background: #f0f0f0;
            &>li{
            background-color: #fafafa;
            width: 49%;
            height:1.62rem;
            margin-bottom: .1rem;
                &>img{
                    height:.53rem;
                    width: 100%;
                }
                &>h2{
                    height: .4rem;
                    line-height: .2rem;
                    font-size: .16rem;
                    padding:.1rem;
                    font-weight: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &>p{
                    height: .21rem;
                    line-height: .16rem;
                    font-size: .12rem;
                    padding: 0 .1rem .05rem .1rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
</style>
