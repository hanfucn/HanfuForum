<!--

Copyright (C) 2019 张珏敏.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

-->

<template>
  <div class="login">
    <div class="login-image">
      <Carousel :loop="setting.loop"
                :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/assets/0.jpg" alt="">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="@/assets/1.jpg" alt="">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="login-text">
      <router-view name="auth"></router-view>
    </div>
  </div>
</template>

<script>
  import {
    Card,
    Menu,
    MenuItem,
    Carousel,
    CarouselItem,
    Icon,
    Form,
    FormItem,
    Button,
    Input,
    Divider,
    Avatar,
    Checkbox
  } from 'iview'
  import '@/assets/Icon-tencent/iconfont.css'

  export default {
    name: 'index',
    data () {
      return {
        activeName: '',
        show: true,
        loginLock: false,
        setting: {
          loop: true,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: 'none',
          radiusDot: false,
          trigger: 'click',
          arrow: 'never'
        }
      }
    },
    computed: {
      getMenuActives: function () {
        return this.$store.getters['index/getMenuActive']
      }
    },
    watch: {
      getMenuActives: function (a, b) {
        console.log('aaaa', a, b)
        this.activeName = a
      }
    },
    methods: {
      onLogin: function () {
        this.loginLock = true
      }
    },
    components: {
      Card,
      Menu,
      MenuItem,
      Carousel,
      CarouselItem,
      Icon,
      Form,
      FormItem,
      Button,
      Input,
      Divider,
      Avatar,
      Checkbox
    }
  }
</script>

<style scoped>

  .login {
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  .login-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .login-image img {
    width: 100%;
  }

  /* 顶部导航 */
  .login-menu {
    top: 0;
    width: 100vw;
    position: absolute;
    /*display: none;*/
  }

  .login-menu-context {
    width: 1200px;
    margin: auto;
  }

  /* 固定窗口大小 登录或者注册小窗口 */
  >>> .login-text .login-card .ivu-card {
    width: 25vw;
    margin: auto;
  }
</style>
