<template>
  <div>
    <div class="elect">
      <p>电器城</p>
      <p>
        更多
        <!-- <img src="../../../imgs/icon_more.png" alt /> -->
      </p>
    </div>
    <ul class="goods">
      <li v-for="data in datalist" :key="data.goods_commonid">
        <img :src="data.goods_image" alt />
        <p>{{data.goods_name}}</p>
        <p>{{data.goods_price}}元</p>
        <p>已售{{data.goods_salenum}}件</p>
      </li>
    </ul>
    <div class="float"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: []
    };
  },

  //   provinc=140&city=140100000000&page=1&pageSize=10
  //   provinc=140&city=140100000000&page=2&pageSize=10
  // https://mobileway.lecuntao.com/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562674208373&act=goods&op=goodsRecom_new
  // https://mobileway.lecuntao.com/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562674208373&act=goods&op=goodsRecom_new
  // http://localhost:8080/lct?provinc=140&city=140100000000&page=2&pageSize=10&api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562674208373&act=goods&op=goodsRecom_new

  mounted() {
    axios({
      method: "post",
      url:
        "lct?provinc=140&city=140100000000&page=2&pageSize=10&api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562674208373&act=goods&op=goodsRecom_new",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log(res.data);
      //     console.log(res.data.datas.list)
      this.datalist = res.data.datas.list;
    });

    
  }
};
</script>
<style lang="scss" scoped>
.elect {
  width: 100%;
  height: 0.35rem;
  background: #f0f0f0;
  line-height: 0.35rem;
  margin-top: 0.48rem;
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
</style>

