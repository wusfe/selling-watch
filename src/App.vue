<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less" type="text/css">
  @import "less/reset.css";
  @import "less/common.less";

  /deep/ .mint-toast-text {
    font-size: 50px !important;
  }

  #app {
    font-family: 微软雅黑;
    /*overflow-y: auto;*/
  }

  html, body {
    /*height: 100%;*/
    /*overflow-y: auto;*/
    /*overflow-x: hidde n;*/
  }

  /*body {*/
  /*  -webkit-overflow-scrolling: touch;*/
  /*  overflow-scrolling: touch;*/
  /*}*/

</style>
