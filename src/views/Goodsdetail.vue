<template>
  <div class="goodsdetail">

    {{ this.$route.params.gcid }}
  </div>
</template>

<script>

  import axios from "axios";

  export default {

    mounted() {
      this.$store.state.isHiddenFooterbar = false;
      // axios({
      //   url: `/lct?goods_id=625504&key=abfd9b8b53c8f50a6d03f3644c8830c8api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562382056055&act=mobile_goods_detail&op=getDetailData`,
      //   methods: 'post'
      // }).then(res => {
      //   console.log(res.data)
      // });
      location.assign(`https://m.lecuntao.com/tpl/goods/index.html?goods_id=${this.$route.params.gcid}`);
    },

    destroyed () {
      this.$store.state.isHiddenFooterbar = true
    }

  }
</script>

<style>

</style>
