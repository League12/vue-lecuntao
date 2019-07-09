<template>
  <div>
    <navlist></navlist>
   
  </div>
</template>
<script>
import navlist from "@/views/Home/navlist";

export default {
  data() {
    return {
      isFixed: false
    };
  },
  components: {
    navlist,
  },
  mounted() {
    window.onscroll = this.handlescroll;
  },

  //   methods: {
 
  //   },
  beforeDestroy() {
    window.onscroll = null;
  }
};
</script>
<style lang="scss" scoped>

</style>

