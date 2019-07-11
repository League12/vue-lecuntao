<template>
  <div class="recommand">
    <p>为你推荐</p>
    <ul v-if="datalist.length">
      <li v-for="(data, index) in selectData" :key="index" @click="handleLiClick(data.goods_id)">
        <img :src="data.goods_image" />
        <p>{{ data.goods_name }}</p>
        <p>¥{{ data.goods_price }}</p>
      </li>
    </ul>
    <p>已经到底了</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {

  props: ['gcid'],

  data () {
    return {
      datalist: []
    }
  },

  computed: {
    selectData () {
      return this.datalist.filter((data, index) => index < 6)
    }
  },

  mounted () {
    let pid = localStorage.getItem("province_id") || 140;
    let cid = localStorage.getItem("city_id") || 140100000000;
    axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562728872841&act=mobile_goods_detail&op=getRecommentDetail',
      `gc_id=${this.gcid}&province_id=${pid}&city_id=${cid}&key=636e27f7c9006edc952c69b12c7b0a6d`
    ).then(res => {
      this.datalist = res.data.datas.recommendGoods
    })
  },

  methods: {
    handleLiClick (gcid) {
      this.$router.push(`/goodsdetail/${gcid}`)
      this.$emit('myevent', gcid)
      // location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>

  div.recommand {
    padding-bottom: .8rem;
    &>p:nth-of-type(1) {
      height: .43rem;
      line-height: .43rem;
      font-size: .13rem;
      color: #f81234;
      text-align: center;
      font-weight: bold;
    }

    &>p:nth-of-type(2) {
      height: .64rem;
      background-color: #f0f0f0;
      border-top: 1px solid #dcdcdc;
      line-height: .64rem;
      font-size: .12rem;
      text-align: center;
      color: #bababa;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 .1rem;

      li {
        width: 1.13rem;
        height: 1.7rem;
        img {
          width: 100%;
        }

        p:nth-of-type(1) {
          padding-top: .03rem;
          font-size: .13rem;
          color: #8b8b8b;
          height: .33rem;
          line-height: .16rem;
          overflow: hidden;
        }

        p:nth-of-type(2) {
          font-size: .11rem;
        }
      }
    }
  }

</style>
