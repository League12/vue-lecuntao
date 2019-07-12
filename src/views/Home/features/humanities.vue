<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.goods_id" @click="tiaoxiangqing(data.goods_id)">
        <img :src="'https://img.lecuntao.com/data/upload/' + data.goods_pic" alt />
        <p>{{data.goods_name}}</p>
        <p>￥{{data.goods_price}}</p>
        <img src="https://m.lecuntao.com/resource/te/images/buybtn.png?lv=84bd958833" alt />
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
      tiaolist: []
    }
  },
  mounted () {
    axios
      .post(
        'lct?api_version=te_1.0.0&platType=2&client=wap&isEncry=0&time=1562806715633&act=world&op=product_list',
        'id=3'
      )
      .then(res => {
        this.datalist = res.data.datas[0]
        this.tiaolist = res.data.datas.category_goods
      })
  },
  methods: {
    tiaoxiangqing (gcid) {
      this.$router.push(`/goodsdetail/${gcid}`)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  ul {
    padding: 0.1rem;
    li {
      width: 1.66rem;
      height: 2.5rem;
      position: relative;
      float: left;
      img:nth-of-type(1) {
        width: 1.66rem;
      }
      p:nth-of-type(1) {
        width: 1.66rem;
        height: 0.36rem;
        font-size: 0.13rem;
        color: #111;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p:nth-of-type(2) {
        margin-top: 10px;
        color: #eb1441;
        font-size: 0.156rem;
      }
      img:nth-of-type(2) {
        width: 0.28rem;
        position: absolute;
        bottom: 0.13rem;
        right: 0.1rem;
      }
    }
    li:nth-of-type(2n-1) {
      margin-right: 0.1rem;
    }
    li:nth-of-type(2n) {
      margin-left: 0.1rem;
    }
  }
}
</style>
