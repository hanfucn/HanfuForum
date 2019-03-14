<template>
  <div id="app">
    <router-view name="default"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #515a6e;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .float-right {
    float: right;
  }
  .float-left {
    float: left;
  }
  .button-margin-10 {
    margin-left: 10px;
  }
  .main-width-1200 {
    width: 1400px;
  }
</style>
