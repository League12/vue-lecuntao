<template>
  <div>
    <ul>
      <router-link to="/features/farmers" tag="li" activeClass="active">农特产品</router-link>
      <router-link to="/features/humanities" tag="li" activeClass="active">人文产品</router-link>
      <router-link to="/features/tourism" tag="li" activeClass="active">旅游产品</router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
div{
    ul{
        width: 100%;
        height: .5rem;
        display: flex;
        li{
            flex: 1;
            line-height: .5rem;
            text-align: center;
            font-size: .156rem;
            color: #333333;
        }
    }
}
.active{
  color:#f81234;
  border-bottom: 2px solid red;
}
</style>

