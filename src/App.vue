<template>
  <div id="app">
    <router-view name="default"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    // 提供reload方法
    provide: function () {
      return {
        reload: this.reload
      }
    },
    // isRouterAlive控制显示
    data: function () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      // 刷新方法
      reload: function () {
        this.isRouterAlive = false
        // 该方法会在dom更新后执行
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    },
    computed: {
      getIsRouterAlive: function () {
        return this.$store.getters['index/getIsRouterAlive']
      }
    },
    watch: {
      getIsRouterAlive: function (a, b) {
        console.log('reload', a)
        this.$nextTick(() => {
          this.$store.commit('index/setIsRouterAlive', false)
          // this.reload()
        })
        // this.reload()
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
