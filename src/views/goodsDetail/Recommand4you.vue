<template>
  <div class="recommand">
    <p>为你推荐</p>
    <ul v-if="datalist.length">
      <li v-for="data in selectData">
        <img :src="data.datas.goods_info.goods_image" />
        <p>{{ data.datas.goods_info.goods_name }}</p>
        <p>¥{{ data.datas.goods_info.goods_price }}</p>
      </li>
    </ul>
    <p>已经到底了</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {

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
    axios.get('/test.json').then(res => {
      this.datalist = res.data
    })
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
