<template>
    <div>
        <div class="head">
            <div class="goback" @click="backClick()"></div>
            <h2>选择所在地区</h2>
        </div>
        <div>当前定位：</div>
        <div>点击定位当前位置</div>
        <div>请选择<span>省市地区</span></div>
        <ul>
            <li v-for="data in datalist" :key="data.province_id" @click="handleClick(data.province_id,data.province_name)">{{data.province_name}}</li>
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
    axios.get('/lct?region=province_name&api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562550203706&act=Address&op=get_region/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562550203706&act=Address&op=get_region').then(
      res => {
        this.datalist = res.data.datas
      })
  },
  methods: {
    handleClick (id, loca) {
      localStorage.setItem('province_id', `${id}`)
      localStorage.setItem('province_name', `${loca}`)
      this.$router.push({ name: 'city', params: { id: id } })
    },
    backClick () {
      this.$router.push('/home')
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
                font-size: .2rem;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
            }
        }
        &>div:nth-of-type(2){
            height: .46rem;
            width:100%;
            margin-top:.48rem;
            background:#f0f0f0;
            line-height: .46rem;
            padding-left: .1rem;
        }
        &>div:nth-of-type(3){
            height: .4rem;
            line-height: .4rem;
            width:100%;
            text-align: center;
            color: #666;
            background: url(/yzy_imgs/location.png) no-repeat;
            background-size: .15rem;
            background-position:1rem 50%;
        }
        &>div:nth-of-type(4){
            height: .5rem;
            line-height: .5rem;
            width:100%;
            border-top:1px solid #eee;
            padding-left: .1rem;
            color: #666;
            &>span{
                margin-left: 1em;
                color: #000;
            }
        }
        ul{
            padding-left: .1rem;
            &>li{
                height: .5rem;
                line-height: .5rem;
                border-top:1px solid #eee;
            }
        }
    }
</style>
