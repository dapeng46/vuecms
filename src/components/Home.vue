<template>
  <div>
    <el-button type="info" @click="getout">退出</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
      getout() {
          window.sessionStorage.removeItem("token");
          this.$router.push('/login')
      }
  }
}
</script>
<style lang="less" scoped>
</style>
