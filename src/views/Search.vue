<template>
  <div class="search">
    <div>
      <i @click="goback()"></i>
      <div>
        <span @click="searchCho()">
          {{leixing?'商品':'店铺'}}
          <ul :class="searchChoose?'show_ul':'hidden_ul'">
            <li @click="searchCho_1()">商品</li>
            <li @click="searchCho_2()">店铺</li>
          </ul>
        </span>
        <input type="text" name="" id="" placeholder="输入商品名称" v-model="searchText">
        <i @click="deleteText()"></i>
      </div>
      <button @click="goSearch()">搜索</button>
    </div>
    <h2><span>Hot</span>热门搜索</h2>
    <ul>
      <li>年货</li>
      <li>乐6集</li>
      <li>米面</li>
      <li>可乐</li>
      <li>手机</li>
      <li>洗衣粉</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchChoose: true,
      leixing: true,
      searchText: ''
    }
  },
  methods: {
    searchCho () {
      if (this.searchChoose === true) {
        this.searchChoose = false
      } else {
        this.searchChoose = true
      }
    },
    searchCho_1 () {
      this.leixing = true
      this.searchChoose = false
    },
    searchCho_2 () {
      this.leixing = false
      this.searchChoose = false
    },
    deleteText () {
      this.searchText = ''
    },
    goback () {
      window.history.back(-1)
    },
    goSearch () {
      this.$router.push('/SearchResult')
      localStorage.setItem('searchResult', `${this.searchText}`)
    }
  },
  mounted () {
    this.$store.state.isHiddenFooterbar = false
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
  i{
       display: inline-block;
       vertical-align: top;
   }
   span{
       display: inline-block;
   }
   .show_ul{
     display: none;
   }
   .hidden_ul{
     display: block;
   }
   .search{
     &>div{
       height: .5rem;
       width: 100%;
       &>i{
         width: .13rem;
         height: .13rem;
         margin: .21rem .14rem 0 .12rem;
         background:url(/yzy_imgs/iclose.png) no-repeat;
         background-size: .13rem;
         float: left;
       }
       &>div{
         width: 2.85rem;
         height:.32rem;
         margin-top:.1rem;
         float: left;
         background: #f2f2f2;
         border-radius: .15rem;
         position: relative;
         &>span{
           width: .8rem;
           height: .2rem;
           line-height: .2rem;
           border-right: 1px solid #ccc;
           position: absolute;
           left: 0;
           top: 50%;
           transform: translateY(-50%);
           text-indent: .15rem;
           background: url(/yzy_imgs/icon_shaixuan_arrowdown.png) no-repeat;
           background-size:.15rem;
           background-position: .5rem;
           position: relative;
           &>ul{
             position: absolute;
             background: rgba(0, 0, 0, .7);
             color: #fff;
             width: 1rem;
             padding: 0 .1rem;
             &>li{
               height: .5rem;
               border-bottom: 1px solid #fff;
               line-height: .5rem;
               text-align: center;
             }
             &>li:nth-of-type(1){
               background:  url(/yzy_imgs/icon_tanchuang_shangpin.png) no-repeat;
               background-size: .17rem;
               background-position: .05rem center;
             }
              &>li:nth-of-type(2){
               background:  url(/yzy_imgs/icon_tanchuang_dianpu.png) no-repeat;
               background-size: .17rem;
               background-position: .05rem center;
             }
           }
         }
         &>input{
           height: .2rem;
           width: 1.65rem;
           border: none;
           outline: none;
           background: #f2f2f2;
           position: absolute;
           left: .8rem;
           top: 50%;
           transform: translateY(-50%);
           padding-left: .1rem;
           font-size: .16rem;
         }
         &>i{
           height: .1rem;
           width: .1rem;
           position: absolute;
           top: 50%;
           transform: translateY(-50%);
           right:.1rem;
           background: url(/yzy_imgs/icon_sousuo_close.png) no-repeat;
           background-size:contain;
         }
       }
       &>button{
         width: .28rem;
         height: .4rem;
         float: left;
         border: none;
         background: #fff;
         font-size: .14rem;
         margin:.06rem 0 0 .11rem;
       }
     }
     &>h2{
       width:100%;
       height:.25rem;
       padding: 0 0 .05rem .11rem;
       font-size: .16rem;
        font-weight: normal;
        &>span{
          font-size: .12rem;
          font-weight: bold;
          margin-right: .05rem;
          color: rgb(223, 11, 11);
        }
     }
     &>ul{
       width:97%;
       margin:0 auto;
       &>li{
         height: .3rem;
         line-height: .2rem;;
         padding: .05rem .15rem;
         border: 1px solid #ccc;
         border-radius: .15rem;
         font-size: .14rem;
         margin: 0 .1rem .1rem 0;
         display: inline-block;
       }
     }
   }
</style>
