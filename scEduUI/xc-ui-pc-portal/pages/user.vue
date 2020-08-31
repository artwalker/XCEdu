<template>
  <div>
    用户管理导航，
    <nuxt-link :to="'/user/101'">修改</nuxt-link>
    <nuxt-child/>
  </div>
</template>
<script>
  export default {
    layout: "test"
  }
</script>
<style>

</style>
