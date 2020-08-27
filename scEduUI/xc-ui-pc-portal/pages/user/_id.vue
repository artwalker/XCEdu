<template>
  <div> 修改用户信息{{id}}, 名称{{name}}</div>
</template>
<script>
  export default {
    layout: "test",
    async asyncData() {
      console.log("async方法")

      var a = await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("1")
          resolve(1)
        }, 2000)
      });

      var b = await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("2")
          resolve(2)
        }, 1000)
      });

      return {
        name: 'hello world'
      }
    },
    data() {
      return {
        id: ''
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      console.log(this.id)
    }
  }
</script>
<style>

</style>
