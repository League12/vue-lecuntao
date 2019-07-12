<template>
  <div class="glheader">
    <input type="text" v-model="searchInput" placeholder="请输入商品名称" @focus="handleFocus">
    <button @click="handleBtnClick">取消</button>
  </div>
</template>

<script>

export default {

  data () {
    return {
      searchInput: ''
    }
  },

  methods: {
    handleFocus () {
      this.$router.push('/search')
    },
    handleBtnClick () {
      this.$router.push('/home')
    }
  }
}

</script>

<style lang="scss" scoped>

  * {
    box-sizing: border-box;
  }

  div.glheader {
    height: .6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    input {
      height: .3rem;
      width: 3.03rem;
      background-color: #f2f2f2;
      border: 0;
      border-radius: .15rem;
      font-size: .14rem;
      color: #757575;
      margin-left: .19rem;
      padding-left: .19rem;
    }

    button {
      background-color: white;
      font-size: .13rem;
      color: black;
      border: 0;
      margin-right: .14rem;
    }
  }
</style>
