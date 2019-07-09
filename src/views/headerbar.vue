<template>
    <div class="header" :id="headerBackground?'now':'go'">
        <div>
            <i></i>
            <span>{{location}}</span>
            <i></i>
        </div>
        <div>
            <input type="text" placeholder="搜索您需要的商品" @click="searchclick()">
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      location: localStorage.getItem('city_name'),
      scroll: '',
      headerBackground: true
    }
  },
  methods: {
    searchclick () {
      this.$router.push('/Search')
    },
    menu () {
      this.scroll = document.documentElement.scrollTop
      // console.log(this.scroll)
      if (this.scroll > 200) {
        this.headerBackground = false
      } else {
        this.headerBackground = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  }
}
</script>

<style lang="scss" scoped>
    i{
        display: inline-block;
        vertical-align: top;
    }
    span{
        display: inline-block;
    }
    #now{
        background: transparent;
    }
    #go{
        background:rgb(248, 18, 52);
    }
    .header{
        height: .4rem;
        width: 100%;
        color: #fff;
        position: fixed;
        top:0;
        &>div:nth-of-type(1){
            height: .28rem;
            width: .77rem;
            float: left;
            position: absolute;
            top:.05rem;
            left: .1rem;
            &>i:nth-of-type(1){
                height:.15rem;
                width: .12rem;
                background: url(/yzy_imgs/icon_dingwei.png) no-repeat;
                background-size: contain;
                margin-top:.05rem;
            }
            &>span{
                width:.6rem;
                height: .26rem;
                text-align: center;
                font-size: .16rem;
            }
            &>i:nth-of-type(2){
                width: .05rem;
                height: .1rem;
                background: url(/yzy_imgs/right-white.png) no-repeat;
                background-size: contain;
                 margin-top:.07rem;
            }
        }
        &>div:nth-of-type(2){
            height:.3rem;
            width: 2.62rem;
            float: left;
            border-radius:.15rem;
             background: #fff  no-repeat;
             position: absolute;
             top:.05rem;
            right: .1rem;
            background-image: url(/yzy_imgs/iconSousuoBlack.png);
            background-size: .15rem;
            background-position: .1rem .07rem;
            &>input{
                width:2.1rem;
                height:.3rem;
                border:none;
                outline: none;
                background: #fff;
                position: absolute;
                left:.32rem;
            }
        }
    }
</style>
