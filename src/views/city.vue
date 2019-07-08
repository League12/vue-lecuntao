<template>
    <div>
        <div class="head">
            <div class="goback" @click="backClick()"></div>
            <h2>选择所在地区</h2>
        </div>
        <ul>
            <li v-for="data in datalist" :key="data.city_id" @click="handleClick(data.city_id,data.city_name)">{{data.city_name}}</li>
        </ul>
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
  mounted () {
    axios.get(`/lct?region=city_name&parent_id=${localStorage.getItem('province_id')}&api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562566352431&act=Address&op=get_region`).then(
      res => {
        this.datalist = res.data.datas
        console.log(this.datalist)
      })
    console.log(document.cookie)
  },
  methods: {
    handleClick (id, city) {
      localStorage.setItem('city_id', `${id}`)
      localStorage.setItem('city_name', `${city}`)
      this.$router.push('/home')
    },
    backClick () {
      this.$router.push('/location')
    }
  }
}
</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
    div{
        .head{
            height: .48rem;
            width: 100%;
            position: fixed;
            top:0;
            background: #fff;
            &>.goback{
                height:.48rem;
                width: .87rem;
                margin-left: .09rem;
                float: left;
                background: url(/yzy_imgs/btn_back.png) no-repeat;
                background-size: .2rem;
                background-position:0 50%;
            }
            &>h2{
                height:.48rem;;
                width: 1.75rem;
                line-height: .48rem;
                font-weight: normal;
                font-size: .19rem;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
            }
        }
        ul{
            padding-left: .1rem;
            margin-top:.48rem;
            overflow: auto;
            &>li{
                height: .5rem;
                line-height: .5rem;
                border-top:1px solid #eee;
            }
        }
    }
</style>
