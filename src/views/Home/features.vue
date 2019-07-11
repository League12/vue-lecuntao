<template>
  <div>
    <div class="bazaar">
      <img
        src="https://m.lecuntao.com/resource/images/details/rightward.png?lv=c01b8c54c9"
        alt
        @click="previous"
      />
      <p @click="previous">返回</p>

      <img src="https://m.lecuntao.com/resource/te/images/top_logo.png?lv=7dc09ace15" alt />
    </div>
    <div class="goods">
      <img src="https://m.lecuntao.com/resource/te/images/banner/banner-753.jpg?lv=234535e250" alt />
      <ul>
        <li>
          <img src="https://m.lecuntao.com/resource/te/images/nav_city.png?lv=909fa351d4" alt />
          <p>城市大全</p>
        </li>
        <li>
          <img src="https://m.lecuntao.com/resource/te/images/nav_hjc.png?lv=0b75548ad9" alt />
          <p>汇聚中国</p>
        </li>
        <li>
          <img src="https://m.lecuntao.com/resource/te/images/nav_qbfl.png?lv=4cfd1b287f" alt />
          <p>全部分类</p>
        </li>
      </ul>
      <img src="https://m.lecuntao.com/resource/te/images/icon_pic.png?lv=b041671b52" alt />
    </div>
    <div class="optimal">
      <h3>优馆推荐</h3>

      <div class="hong">
        <img src="https://m.lecuntao.com/resource/te/images/i_lx.png" alt />
        <p>弘扬传统文化</p>
        <p>振兴民族品牌</p>
        <img src="https://m.lecuntao.com/resource/te/images/i_lx.png" alt />
      </div>
    </div>
    <div class="jkl">
      <ul>
        <li v-for="(data,index) in datalist" :key="index">
          <img :src="data.pic_img" alt />
          <div class="zhezhao"></div>
          <p>{{data.pic_name}}</p>
          <p>{{data.pic_tename}}</p>
        </li>
        <div class="flaot"></div>
      </ul>
    </div>
    <div class="optimal">
      <h3>热销产品</h3>

      <div class="hong">
        <img src="https://m.lecuntao.com/resource/te/images/i_lx.png" alt />
        <p>弘扬传统文化</p>
        <p>振兴民族品牌</p>
        <img src="https://m.lecuntao.com/resource/te/images/i_lx.png" alt />
      </div>
    </div>
    <div class="bnm">
      <ul>
        <li v-for="(data,index) in itemlist" :key="index">
          <img :src="data.goods_pic" alt />
          <div class="zhezhao"></div>
          <p>{{data.goods_name}}</p>
          <p>
            ￥
            <span>{{data.goods_price}}</span>
          </p>
        </li>
        <div class="flaot"></div>
      </ul>
    </div>
    <navbar></navbar>
    <router-view></router-view>
    <div class="di"></div>
  </div>
</template>
<script>
import axios from 'axios'
import navbar from '@/views/Home/features/navbar'
export default {
  data () {
    return {
      datalist: [],
      itemlist: []
    }
  },
  components: {
    navbar
  },
  mounted () {
    axios({
      url:
        '/lct?api_version=te_1.0.0&platType=2&client=wap&isEncry=0&time=1562762233743&act=world&op=axios_pavilion'
    }).then(res => {
      this.datalist = res.data.datas
    })
    axios({
      url:
        '/lct?api_version=te_1.0.0&platType=2&client=wap&isEncry=0&time=1562762233743&act=world&op=axios_floors'
    }).then(res => {
      this.itemlist = res.data.datas.goodslist
    })
    this.$store.commit('toggleFooterbar', false)
  },
  methods: {
    previous () {
      window.history.back(-1)
    }
  },
  destroyed () {
    this.$store.commit('toggleFooterbar', true)
  }
}
</script>

<style lang="scss" scoped>
.bnm {
  height: 5.4rem;
  ul {
    li {
      width: 100%;
      height: 1.35rem;
      border-top: 1px solid #e1e2e7;
      position: relative;
      img {
        height: 1.14rem;
        width: 1.14rem;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0.1rem;
      }
      p:nth-of-type(1) {
        width: 2.24rem;
        position: absolute;
        right: 0.15rem;
        top: 0.15rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p:nth-of-type(2) {
          width: 2.24rem;
          position: absolute;
          right: 0.15rem;
          bottom: 0.15rem;
        span {
          width: 2.24rem;
          position: absolute;
          right: -0.25rem;
          bottom: 0rem;
          color:#f81234;
          font-size: .185rem;
        }
      }
    }
  }
}
.bazaar {
  width: 100%;
  height: 0.48rem;
  background: #fff;
  position: relative;
  border-bottom: 1px solid rgb(201, 121, 121);
  & > img:nth-of-type(1) {
    width: 0.12rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-right: 8px;
    margin-left: 15px;
  }
  p:nth-of-type(1) {
    position: absolute;
    line-height: 0.48rem;
    width: 100px;
    text-indent: 0.38rem;
    font-size: 0.17rem;
  }
  p:nth-of-type(2) {
    position: absolute;
    line-height: 0.48rem;

    text-indent: 0.38rem;
    font-size: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    color: #f81234;
    height: 0.48rem;
  }
  img:nth-of-type(2) {
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    color: #f81234;
    position: absolute;
    height: 0.48rem;
  }
}
.goods {
  height: 430px;
  background: #eee;
  & > img:nth-of-type(1) {
    height: 1.87rem;
    width: 100%;
  }
  & > img:nth-of-type(2) {
    height: 0.94rem;
    width: 3.54rem;
    display: block;
    margin: 0 auto;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      width: 1.18rem;
      height: 1.02rem;
      padding: 0.18rem 0;
      img {
        display: block;
        width: 0.44rem;
        margin: 0 auto;
      }
      p {
        margin-top: 8px;
        text-align: center;
      }
    }
  }
}
.optimal {
  width: 100%;
  height: 0.78rem;

  position: relative;
  h3 {
    position: absolute;
    text-align: center;
    width: 200px;
    height: 35px;
    left: 0;
    right: 0;
    top: 10px;
    margin: auto;
  }
}
.hong {
  width: 300px;
  height: 35px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;
  p:nth-of-type(1) {
    width: 100px;
    position: absolute;
    left: 0.5rem;
    top: 6px;
    bottom: 0;
    margin: auto;
  }
  p:nth-of-type(2) {
    width: 100px;
    position: absolute;
    right: 0.5rem;
    top: 6px;
    bottom: 0;
    margin: auto;
  }
  img:nth-of-type(1) {
    width: 12px;
    position: absolute;
    left: 0.25rem;
    line-height: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  img:nth-of-type(2) {
    width: 12px;
    position: absolute;
    right: 0.25rem;
    line-height: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.jkl {
  position: relative;
  height: 5.32rem;
  ul {
    position: absolute;
    width: 3.54rem;
    height: 3.64rem;
    left: 0;
    right: 0;
    margin: auto;
    li {
      width: 1.72rem;
      img {
        width: 1.72rem;
      }
      div.zhezhao {
        width: 1.45rem;
        height: 0.42rem;
        background: #f00;
        opacity: 0.6;
        position: absolute;
        bottom: 0.35rem;
        left: 0;
        right: 0;
        margin: auto;
      }
      p:nth-of-type(1) {
        color: #fff;
        font-size: 0.15rem;
        position: absolute;
        bottom: 0.55rem;
        left: 0.2rem;
      }
      p:nth-of-type(2) {
        color: #fff;
        font-size: 0.12rem;
        position: absolute;
        bottom: 0.38rem;
        left: 0.17rem;
      }
    }
    li:nth-of-type(1) {
      position: absolute;
      top: 0;
      left: 0;
    }
    li:nth-of-type(2) {
      position: absolute;
      top: 0;
      right: 0;
    }
    li:nth-of-type(3) {
      position: absolute;
      top: 2.65rem;
      left: 0;
    }
    li:nth-of-type(4) {
      position: absolute;
      top: 2.65rem;
      right: 0;
    }
  }
}
.flaot {
  height: 0;
  clear: both;
}
.di {
  height: 50px;
}

</style>
