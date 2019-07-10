<template>
  <div>
    <div class="elect">
      <p>日用品</p>
      <p @click="tiaoclick">更多<img src="../../../imgs/icon_more.png" alt />
      </p>
    </div>
    <ul class="goods">
      <li v-for="data in datalist" :key="data.goods_commonid" @click="tiaoxiangqing(data.goods_id)">
        <img :src="data.goods_image" alt />
        <p>{{data.goods_name}}</p>
        <p>{{data.goods_price}}元</p>
        <p>已售{{data.goods_salenum}}件</p>
      </li>
    <div class="float"></div>
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
    axios({
      url:
        '/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562586783511&act=index&op=index&key='
    }).then(res => {
    //   console.log(res.data.datas.category_goods[1]);
      this.datalist = res.data.datas.category_goods[4].goods_list
      //   console.log(this.datalist);
      this.tiaolist = res.data.datas.category_goods
    })
  },
  methods: {
    tiaoclick () {
      // console.log(this.datalist)
      this.$router.push(`/selectedlist/${JSON.stringify({"gcid":this.tiaolist[4].cate_info.gc_id, "gcname":this.tiaolist[4].cate_info.cate_name })}`)
    },
    tiaoxiangqing(gcid){
      this.$router.push(`/goodsdetail/${gcid}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.elect {
  width: 100%;
  height: 0.35rem;
  background: #f0f0f0;
  line-height: .35rem;
  p:nth-of-type(1) {
    float: left;
    padding-left: 5px;
    border-left: 2px solid #ff4e67;
  }
  p:nth-of-type(2) {
    float: right;
    padding-right: 5px;
    img {
      width: 12px;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
}
.goods {
  li:nth-of-type(2n-1) {
    width: 1.86rem;
    height: 2.57rem;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    float: left;
    img {
      width: 1.5rem;
      margin: 0.15rem 0.18rem 0.2rem;
    }
    p:nth-of-type(1) {
      width: 1.67rem;
      height: 0.36rem;
      font-size: 13px;
      margin: 0 10px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 0 auto;
    }
    p:nth-of-type(2) {
      font-size: 15px;
      color: #f23030;
      float: left;
      margin-top: 5px;
      margin-left: 10px;
    }
    p:nth-of-type(3) {
      font-size: 13px;
      color: #999;
      float: right;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
  li:nth-of-type(2n) {
    width: 1.86rem;
    height: 2.57rem;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    float: right;
    img {
      width: 1.5rem;
      margin: 0.15rem 0.18rem 0.2rem;
    }
    p:nth-of-type(1) {
      width: 1.67rem;
      height: 0.36rem;
      font-size: 13px;
      margin: 0 10px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 0 auto;
    }
    p:nth-of-type(2) {
      font-size: 15px;
      color: #f23030;
      float: left;
      margin-top: 5px;
      margin-left: 10px;
    }
    p:nth-of-type(3) {
      font-size: 13px;
      color: #999;
      float: right;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
.float{
    height: 0;
    clear: both;
}
</style>
