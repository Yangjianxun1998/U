<template>
  <el-scrollbar id="app">
    <!-- 首页头部内容 -->
    <headbox />
    <!-- 内容 -->
    <router-view />
    <!-- 页尾 -->
    <footbox />
  </el-scrollbar>
</template>

<script>
import headbox from "@/components/head/headbox.vue"; //首页头部内容
import footbox from "@/components/foot/footbox.vue"; //首页尾部内容

export default {
  name: "app",
  components: {
    headbox, //首页头部内容
    footbox, //首页尾部内容
  },
};
</script>

<style lang="less">
@import url("./assets/css/common.css");
// 页内滚动
#app {
  height: 100vh;
  width: 100vw;
  background-color: #f2f4f7;
  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }
}
</style>
