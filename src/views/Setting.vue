<template>
  <div class="setting">
    <settingheader></settingheader>
    <p>
      <span>关于乐村淘</span>
    </p>

    <button>退出登录</button>

  </div>
</template>

<script>

  import settingheader from './setting/Settingheader'

  export default {

    mounted() {

    },

    components: {
      settingheader,
    }
  }

</script>

<style lang="scss" scoped>

  div.setting {
    position: relative;
    &>p {
      height: .51rem;
      border-bottom: 1px solid #ccc;
      background: url("/imgs/league/icon_wodedingdanjiantou.png") no-repeat 3.54rem center;
      background-size: .11rem .11rem;
      display: flex;
      align-items: center;
      font-size: .13rem;
      padding-left: .09rem;
      span:nth-of-type(1) {
        color: #333;
        padding-right: 1.86rem;
      }
    }

    &>button {
      height: .5rem;
      width: 3.53rem;
      background-color: #f81234;
      border: 0;
      border-radius: 5px;
      font-size: .15rem;
      color: white;
      margin-top: .17rem;
      margin-left: .11rem;
    }


  }

</style>
