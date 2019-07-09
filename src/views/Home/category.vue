<template>
  <div>
    <navlist :class="isFixed?'fixed':''" ></navlist>
    <electricity class="sssss" ref="mylist" ></electricity>
    <food ></food>
    <rice></rice>
    <necessities></necessities>
    <clothing></clothing>
  </div>
</template>
<script>
import navlist from '@/views/Home/navlist'
import electricity from '@/views/Home/navlist/electricity'
import food from '@/views/Home/navlist/food'
import rice from '@/views/Home/navlist/rice'
import necessities from '@/views/Home/navlist/necessities'
import clothing from '@/views/Home/navlist/clothing'

export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    navlist,
    electricity,
    food,
    rice,
    necessities,
    clothing
  },
  mounted () {
    window.onscroll = this.handlescroll
  },

  methods: {
    handlescroll () {
      console.log('aaa')
      if (
        this.$refs.mylist.$el.offsetTop - document.documentElement.scrollTop <= 88
      ) {
        // console.log(this.$refs.mylist.$el.offsetTop)
        this.isFixed = true
      } else {
        //   console.log(this.$refs.mylist.$el.offsetTop,"11111111")
        // console.log('unfixed')
        this.isFixed = false
      }
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>
