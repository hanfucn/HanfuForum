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
                    <div class="demo-carousel web_bg"
                         :style="'background-image: url(' + require('@/assets/0.jpg') + ');'">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel web_bg"
                         :style="'background-image: url(' + require('@/assets/1.jpg') + ');'">
                    </div>
                </CarouselItem>
            </Carousel>
        </div>

        <b-container fluid class="text-light text-center media-pt">
            <b-row class="m-auto pt-1">
                <b-col md="12" class="auth mt-5 pl-3 pr-3 auth-login">
                    <login-herads style="position: relative;" class="auth-header"></login-herads>
                </b-col>
                <b-col md="auto" class="m-auto mt-md-2">
                    <router-view name="auth"></router-view>
                </b-col>
            </b-row>
        </b-container>
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
  import {
    BContainer,
    BRow,
    BCol
  } from 'bootstrap-vue'
  import '@/assets/Icon-tencent/iconfont.css'
  import loginHerads from '@/components/auth/meta'

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
      Checkbox,
      'login-herads': loginHerads,
      'b-container': BContainer,
      'b-row': BRow,
      'b-col': BCol
    }
  }
</script>

<style scoped>

    @media (max-width: 575px) {
        >>> .col-md-auto {
            width: 100% !important;
        }

        .auth-login {
            display: none;
        }

        .login {
            padding-top: 5rem;
            width: 100%;
        }

        >>> h1 {
            color: #969696;
        }

        >>> small {
            color: #8a8a8a;;
        }

        >>> .container-fluid {
            padding-right: 0px !important;
            padding-left: 0px !important;
            padding-top: 10px !important;
            margin-right: auto;
            margin-left: auto;
        }

        >>> .ivu-carousel {
            display: none;
        }

        .login-image {
            height: auto;
            background: #ffffff;
        }
    }

    @media (min-width: 576px) {
        >>> .col-md-auto {
            width: 300px !important;
        }

        .login {
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        >>> .col-md-auto {
            width: 350px !important;
        }

        .article-container {
            max-width: 520px;
        }
    }

    @media (min-width: 992px) {
        >>> .col-md-auto {
            width: 400px !important;
        }
    }

    @media (min-width: 1200px) {
        >>> .col-md-auto {
            width: 440px !important;
        }

        .auth-header {
            padding-bottom: 25px;
        }

        .auth-header >>> h1 {
            padding-bottom: 5px;
        }

        .media-pt {
            padding-top: 150px;
        }
    }


    .web_bg {
        zoom: 1;
        width: 100%;
        height: inherit;
        z-index: -10;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center;
    }


    >>> .ivu-carousel-item {
        height: -webkit-fill-available !important;
    }


    /* 固定窗口大小 登录或者注册小窗口 */
    >>> .login-text .login-card .ivu-card {
        width: 25vw;
        margin: auto;
    }
</style>

<style>
    .auth-title {
        display: flow-root;
    }

    .auth-center h1 {
        font-weight: 100;
    }

    .auth-left {
        float: left;
    }

    .auth-right {
        float: right;
    }

    .auth-right i {
        font-size: 54px;
        color: #dddddd;
    }

    .auth-title {
        color: #2c3e50;
        text-align: left;
        margin-bottom: .55rem;
    }

    .auth-text:last-child {
        color: #2c3e50;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 0;
    }

    .auth-form {
        padding: 0 10px 0 10px;
    }

    .auth .text-light {
        color: #515a6e !important;
    }

    .auth {
        list-style: none;
        text-align: center;
        margin-bottom: 0 !important;
    }

    .auth li {
        display: inline;
    }

    .login-card {
        position: fixed;
    }

    .login-image {
        width: 100%;
        /*height: 100%;*/
        overflow: hidden;
        position: absolute;
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
</style>