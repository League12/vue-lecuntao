<template>
  <div class="le-cun-tao" v-if="datalist.length">

    <lecuntaoheader></lecuntaoheader>

    <div class="le-cun-banner">
      <img src="/imgs/league/banner.jpg" alt="">
    </div>
    <div class="le-cun-fpbanner">
      <a href="https://m.youku.com/video/id_XMjk0Njk3MDY3Ng==.html?spm=a2h3j.8428770.3416059.1&source="></a>
      <img src="/imgs/league/fp_bg04.jpg" alt="">
      <img src="/imgs/league/fp_bg05.jpg" alt="">
    </div>

    <main>
      <div class="le-cun-fp-list">
        <img src="/imgs/league/fp_bg06.jpg" alt="">

        <div class="swiper-container fp-list-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="fpdata1 in getfpdatas_1" @click="handleImgClick(fpdata1.goods_id)">
              <img :src="'https://img.lecuntao.com/data/upload/shop/store/goods/' + fpdata1.store_id + '/' + fpdata1.goods_image" alt="" @click="handleImgClick(fpdata1.goods_id)">
              <h3>{{ fpdata1.goods_name }}</h3>
              <p>
                <span>¥{{ fpdata1.goods_price }}</span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="le-cun-fp-ul">
        <img src="/imgs/league/fp_bg07.jpg" alt="">

        <ul class="le-cun-fp-ul-list-1">
          <li>
            <img src="/imgs/league/nt_pro.jpg" alt="">
          </li>
          <li v-for="fpdata2 in getfpdatas_2">
            <img :src="'https://img.lecuntao.com/data/upload/shop/store/goods/' + fpdata2.store_id + '/' + fpdata2.goods_image" alt="" @click="handleImgClick(fpdata2.goods_id)">
            <h3>{{ fpdata2.goods_name }}</h3>
            <p>¥{{ fpdata2.goods_price }}</p>
            <p>¥{{ fpdata2.goods_marketprice }}</p>
          </li>
        </ul>

        <ul class="le-cun-fp-ul-list-2">
          <li>
            <img src="/imgs/league/nt_pro (1).jpg" alt="">
          </li>
          <li v-for="fpdata3 in getfpdatas_3">
            <img :src="'https://img.lecuntao.com/data/upload/shop/store/goods/' + fpdata3.store_id + '/' + fpdata3.goods_image" alt="" @click="handleImgClick(fpdata3.goods_id)">
            <h3>{{ fpdata3.goods_name }}</h3>
            <p>¥{{ fpdata3.goods_price }}</p>
            <p>¥{{ fpdata3.goods_marketprice }}</p>
          </li>
        </ul>
      </div>

      <div class="le-cun-tao-banner">
        <img src="/imgs/league/fp_bg08.jpg" alt="">
        <img src="/imgs/league/fp_bg09.jpg" alt="">

        <div class="swiper-container fp-event-list-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p1.jpg" alt="">
              <div>
                <p>十月</p>
                <p>2015</p>
              </div>
              <div>
                <p>一月</p>
                <p>2016</p>
              </div>
              <h3>原平酥梨成功售出千吨 销售额高达635万元</h3>
              <p>第一届原平酥梨节为标杆，原平、祁县、平遥人民政府联合当地乐村淘进行“山西品牌网上行”活动，举办“第二届乐村淘酥梨节”，酥梨销量成功突破600万元！</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p2.jpg" alt="">
              <div>
                <p>一月</p>
                <p>2016</p>
              </div>
              <div>
                <p>三月</p>
                <p>2016</p>
              </div>
              <h3>乐村淘总部举办“永和县委县政府带领农村工作队进城卖枣推荐活动”</h3>
              <p>2016年1月13日，乐村淘总部与永和县委县政府举行了战略合作签约仪式，通过乐村淘永和特色馆帮助销售永和红枣，推广永和县域公共品牌“喜和合”，帮助枣农增收脱贫，切实推进精准扶贫。</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p3.jpg" alt="">
              <div>
                <p>三月</p>
                <p>2016</p>
              </div>
              <div>
                <p>五月</p>
                <p>2016</p>
              </div>
              <h3>特色馆“掘味特色 惠聚中国”官方活动第一期——枣聚吕梁 精准扶贫</h3>
              <p>特色馆第一期全国官方活动正式上线，总销售红枣913万元！来自乐村淘全国23个省、市的电商代表齐聚一堂，助推农村电商发展，为精准扶贫添砖加瓦。</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p4.jpg" alt="">
              <div>
                <p>五月</p>
                <p>2016</p>
              </div>
              <div>
                <p>七月</p>
                <p>2016</p>
              </div>
              <h3>五台特色馆帮助农民销售玉米1200吨，达129万销售额</h3>
              <p>2016山西北部地区玉米滞销，乐村淘利用自身资源紧急对接各地采购商，以高于市场价格0.1——0.2元的价格，帮销五台玉米1200多吨帮农民打开了销路！</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p5.jpg" alt="">
              <div>
                <p>七月</p>
                <p>2016</p>
              </div>
              <div>
                <p>八月</p>
                <p>2016</p>
              </div>
              <h3>特色馆“掘味特色 惠聚中国”官方活动第四期——乐村淘大杏节</h3>
              <p>2016年7月5日，原平,繁峙,阳高,代县四馆联合共同销售大杏69万.</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p6.jpg" alt="">
              <div>
                <p>八月</p>
                <p>2016</p>
              </div>
              <div>
                <p>十月</p>
                <p>2016</p>
              </div>
              <h3>乐村淘特色馆“ 中国武乡太行小米节”</h3>
              <p>“小米节”于8月26日正式启动，武乡、河北迁安、湖北武汉、黑龙江、四川高新区、辽宁等多个特色馆同时开售，截止9月22日，截止销量共计1100580.8元。</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p7.jpg" alt="">
              <div>
                <p>十月</p>
                <p>2016</p>
              </div>
              <div>
                <p>十月</p>
                <p>2016</p>
              </div>
              <h3>“电商扶贫 你我同行”——乐村淘土豆节</h3>
              <p>10月17日全国扶贫日，乐村淘联合静乐、和顺、岚县、娄烦、右玉五个国家级贫困县，精准聚焦，利用乐村淘特色馆平台，扶贫到户、扶贫到人、扶贫到根，把贫困县土豆走向全国，实现销量突破1000万斤！销售金额达700万！</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p8.jpg" alt="">
              <div>
                <p>十月</p>
                <p>2016</p>
              </div>
              <div>
                <p>一月</p>
                <p>2017</p>
              </div>
              <h3>乐村淘3163家体验店齐发力，助力瘫痪女孩李娟卖梨9326箱</h3>
              <p>一方有难八方支援，3163家乐村淘村级体验店展开爱心接力，来自全国各地的体验店你3箱，我10箱，众志成城，团结一心，帮助李娟将梨卖出去。</p>
            </div>

            <div class="swiper-slide fp-event-list-swiper-slide">
              <img src="/imgs/league/fp_p9.jpg" alt="">
              <div>
                <p>一月</p>
                <p>2017</p>
              </div>
              <div>
                <p>十月</p>
                <p>2015</p>
              </div>
              <h3>“隰梨暖冬”——惠农助农精准扶贫专项行动 乐村淘隰县特色馆</h3>
              <p>2017年1月初，辞旧迎新之际，乐村淘隰县特色馆在山西省扶贫办、农业厅、隰县政府以及乐村淘总部的指导支持下，举办“隰梨暖冬”惠农助农扶贫专项行动，帮助隰县贫困户销售酥梨突破50万元！</p>
            </div>
          </div>
        </div>
      </div>

      <div class="le-cun-tao-goodslist">
        <img src="/imgs/league/fp_bg11.jpg" alt="">
        <ul>
          <li v-for="fpdata4 in getfpdatas_4">
            <img :src="'https://img.lecuntao.com/data/upload/shop/store/goods/' + fpdata4.store_id + '/' + fpdata4.goods_image" alt="" @click="handleImgClick(fpdata4.goods_id)">
            <h3>{{ fpdata4.goods_name }}</h3>
            <p>¥{{ fpdata4.goods_price }}</p>
            <p>¥{{ fpdata4.goods_marketprice }}</p>
          </li>
        </ul>
      </div>
    </main>

    <footer>
      <img src="/imgs/league/fp_bg12.jpg" alt="">
      <img src="/imgs/league/fp_bg13.jpg" alt="">
    </footer>

  </div>
</template>

<script>

import lecuntaoheader from './lecuntaolea/Lecuntaoleaheader'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'

export default {

  data () {
    return {
      datalist: []
    }
  },

  computed: {
    getfpdatas_1 () {
      return this.datalist.filter((item, index) => index < 5)
    },
    getfpdatas_2 () {
      return this.datalist.filter((item, index) => { return index >= 5 && index <= 12 })
    },
    getfpdatas_3 () {
      return this.datalist.filter((item, index) => { return index >= 13 && index <= 20 })
    },
    getfpdatas_4 () {
      return this.datalist.filter((item, index) => { return index >= 21 && index <= 30 })
    }
  },

  mounted () {
    this.$store.commit('toggleFooterbar', false)

    axios.get('/mobile/index.php?act=index&op=special&special_id=259&act=index&op=special&special_id=259')
      .then(res => {
        this.datalist = res.data.datas.ntj_list

        this.$nextTick(function () {
          let swiper1 = new Swiper('.fp-list-swiper', {
            slidesPerView: 2,
            spaceBetween: 10
          })

          let swiper2 = new Swiper('.fp-event-list-swiper', {
            slidesPerView: 1,
            loop: true
          })
        })
      })
  },

  methods: {
    handleImgClick (goodid) {
      this.$router.push(`/goodsdetail/${goodid}`)
    }
  },

  destroyed () {
    this.$store.commit('toggleFooterbar', true)
  },

  components: {
    lecuntaoheader
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

  div.le-cun-tao {
    background-color: #fef7f1;
    width: 100%;
    margin-top: .5rem;

    div.le-cun-banner {
      width: 100%;
      height: 2rem;
      img {
        width: 100%;
      }
    }

    div.le-cun-fpbanner {
      margin: .12rem 0 0 0;
      position: relative;
      a {
        position: absolute;
        top: .12rem;
        left: .1rem;
        width: 1.73rem;
        height: 1.13rem;
      }
      img {
        width: 100%;
      }
      img:nth-of-type(1) {
        margin-bottom: .12rem;
      }
    }

    main {
      div.le-cun-fp-list {
        &>img {
          width: 100%;
        }

        div.swiper-slide {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 2.02rem;
          height: 2.41rem;
          background-color: white;
          img {
            width: 1.49rem;
          }
          h3 {
            line-height: .2rem;
            font-size: .12rem;
            height: .4rem;
            overflow: hidden;
            color: #333;
            margin: .1rem;
          }
          p {
            width: 100%;
            display: flex;
            justify-content: space-between;
            span {
              font-size: .15rem;
              color: #ff9117;
              font-weight: bold;
            }
            span:nth-of-type(1) {
              padding-left: .13rem;
            }
            span:nth-of-type(2) {
              width: .2rem;
              height: .2rem;
              margin-right: .13rem;
              background: url("/imgs/league/gm01.png") no-repeat center;
              background-size: 100% 100%;
            }
          }
        }
      }

      div.le-cun-fp-ul {
        &>img {
          width: 100%;
        }
        &>ul {
          display: flex;
          flex-wrap: wrap;
          padding: 0 .1rem;
          justify-content: space-between;
          li {
            width: 1.73rem;
            height: 2.5rem;
            margin-bottom: .1rem;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            img {
              width: 1.6rem;
              height: 1.49rem;
            }
            h3 {
              line-height: .2rem;
              font-size: .12rem;
              height: .4rem;
              overflow: hidden;
              color: #333;
              margin: .15rem .05rem 0;

            }
            p:nth-of-type(1) {
              font-size: .11rem;
              color: #f5aa20;
              width: 100%;
              height: .15rem;
              line-height: .15rem;
              padding-left: .08rem;
            }
            p:nth-of-type(2) {
              font-size: .07rem;
              color: #999;
              width: 100%;
              height: .15rem;
              line-height: .15rem;
              padding-left: .08rem;
              text-decoration: line-through;
            }
          }
          li:nth-of-type(1) {
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      div.le-cun-tao-banner {
        &>img {
          width: 100%;
        }
        div.fp-event-list-swiper {
          height: 2.4rem;
          background: url("/imgs/league/fp_bg10.jpg") no-repeat center;
          background-size: 100% 100%;
          div.fp-event-list-swiper-slide {
            position: relative;
            top: 0;
            img {
              width: 1.5rem;
              height: .9rem;
              position: absolute;
              left: 0;
              right: 0;
              top: .17rem;
              margin: auto;
            }

            &>div {
              position: absolute;
              height: .5rem;
              width: .5rem;
              background-color: #f5aa20;
              display: flex;
              flex-direction: column;
              p:nth-of-type(1) {
                height: .3rem;
                line-height: .3rem;
                text-align: center;
                width: 100%;
                font-size: .18rem;
                font-weight: bold;
                color: white;
              }
              p:nth-of-type(2) {
                height: .13rem;
                line-height: .13rem;
                font-size: .11rem;
                color: white;text-align: center;
              }
            }

            &>div:nth-of-type(1) {
              left: .28rem;
            }

            &>div:nth-of-type(2) {
              right: .28rem;
            }

            &>h3 {
              line-height: .18rem;
              height: .36rem;
              width: 100%;
              overflow: hidden;
              font-size: .13rem;
              color: white;
              padding: 0 .36rem;
              text-align: center;
              position: absolute;
              top: 1.2rem;
              left: 0;
            }

            &>p {
              line-height: .14rem;
              font-size: .12rem;
              height: .44rem;
              overflow: hidden;
              color: #b0b0b0;
              position: absolute;
              top: 1.67rem;
              width: 100%;
              padding: 0 .27rem;
              text-align: center;
            }

          }
        }

      }

      div.le-cun-tao-goodslist {
        &>img {
          width: 100%;
        }

        &>ul {
          display: flex;
          flex-wrap: wrap;
          padding: 0 .1rem;
          justify-content: space-between;
          li {
            width: 1.73rem;
            height: 2.5rem;
            margin-bottom: .1rem;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            img {
              width: 1.6rem;
              height: 1.49rem;
            }
            h3 {
              line-height: .2rem;
              font-size: .12rem;
              height: .4rem;
              overflow: hidden;
              color: #333;
              margin: .15rem .05rem 0;

            }
            p:nth-of-type(1) {
              font-size: .11rem;
              color: #f5aa20;
              width: 100%;
              height: .15rem;
              line-height: .15rem;
              padding-left: .08rem;
            }
            p:nth-of-type(2) {
              font-size: .07rem;
              color: #999;
              width: 100%;
              height: .15rem;
              line-height: .15rem;
              padding-left: .08rem;
              text-decoration: line-through;
            }
          }
        }
      }
    }

    footer {
      img {
        width: 100%;
      }
    }
  }

</style>
