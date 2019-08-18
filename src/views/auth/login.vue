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

<!-- 登录 -->
<template>
  <div class="login-card">
    <Metas></Metas>
    <Card>
      <div slot="title" class="login-title">
        <div class="login-card-left">
          <h5 class="login-card-title">登录到网站</h5>
          <p class="login-card-text">请输入您的用户名和密码</p>
        </div>
        <div class="login-card-right">
          <transition name="fade" mode="out-in">
            <Icon v-if="!loginLock" type="ios-lock" :key="0"/>
            <Icon v-else type="ios-unlock" :key="1"/>
          </transition>
        </div>
      </div>
      <div class="login-form">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">

          <FormItem prop="username" :error="errorValidate.username.message">
            <Input type="text" placeholder="邮箱/用户名" size="large"
                   v-model="formValidate.username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>

          <FormItem prop="password" :error="errorValidate.password.message">
            <Input type="password" placeholder="密码" size="large"
                   v-model="formValidate.password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>

          <FormItem>
            <Button type="primary" shape="circle" size="large" long
                    v-on:click="onLogin">登录
            </Button>
          </FormItem>

          <FormItem>
            <div class="float-left">
              <Checkbox>保持登录</Checkbox>
            </div>
            <div class="float-right">
              <router-link :to="{name: 'register'}">注册账户</router-link>
              <span>&nbsp;|&nbsp;</span>
              <router-link to="">忘记密码</router-link>
            </div>
          </FormItem>
        </Form>
      </div>

      <Divider>其他登录方式</Divider>

      <ul class="login">
        <li>
          <div class="login-icon-item">
            <Avatar size="large" style="background: #2db7f5;">
              <i class="icon-qq"></i>
            </Avatar>
            <div>QQ</div>
          </div>
        </li>
        <li>
          <div class="login-icon-item">
            <Avatar size="large" style="background: #2db7f5;">
              <i class="icon-weixin"></i>
            </Avatar>
            <div>微信</div>
          </div>
        </li>
      </ul>
      <Spin size="large" fix v-if="isValids"></Spin>
    </Card>
    <div class="login-card-center" style="margin-top: 15px">
      <Button type="warning" shape="circle" ghost icon="ios-undo" :to="{name: 'forum'}">返回</Button>
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
    Checkbox,
    Spin,
    Message
  } from 'iview'
  import '@/assets/Icon-tencent/iconfont.css'
  import Axios from '@/axios/index'
  import Metas from '@/components/auth/meta'

  export default {
    name: 'login',
    data () {
      const username = (rule, value, callback) => {
        if (value.length > 2) {
          return callback()
        } else if (value) {
          return callback(new Error('用户名长度需大于2位数哦'))
        }
        return callback(new Error('请输入邮箱或用户名'))
      }
      const password = (rule, value, callback) => {
        if (value.length > 6) {
          return callback()
        } else if (value) {
          return callback(new Error('密码长度需大于6位数哦'))
        }
        return callback(new Error('请输入密码'))
      }
      return {
        pk: null,
        isValids: false, // 正在登录状态 动画
        loginLock: false, // 登录一把锁 状态同步 isValids
        setting: {
          loop: true,
          autoplay: true,
          autoplaySpeed: 10000,
          dots: 'none',
          radiusDot: false,
          trigger: 'click',
          arrow: 'never'
        },
        formValidate: {
          username: '',
          password: ''
        },
        ruleValidate: {
          username: [
            {
              required: true,
              validator: username
            }
          ],
          password: [
            {
              required: true,
              validator: password
            }
          ]
        },
        errorValidate: {
          username: {
            message: null
          },
          password: {
            message: null
          }
        }
      }
    },
    created () {
    },
    mounted () {
      this.$nextTick(() => {
        if (this.verify) this.onNext() // 是否登录
      })
    },
    methods: {
      onLogin: function () {
        this.errorValidate.password.message = null
        this.$refs['formValidate'].validate((valid) => {
          if (valid) {
            this.isValids = true
            Axios.authorization(this.formValidate.username, this.formValidate.password).then((response) => {
              console.log('then', response)
              if (response.status === 200 && response.statusText === 'OK') {
                this.isValids = false
                this.loginLock = true
                this.$store.commit('auth/setAutherization', {
                  pk: response.data.user.id,
                  token: response.data.token,
                  user: response.data.user.username,
                  verify: true
                })
              }
            }).catch(error => {
              console.log('error', error)
              if (error.data.non_field_errors[0] === '无法使用提供的认证信息登录。') {
                Message.warning('用户或密码错误')
                this.errorValidate.password.message = '用户名或密码错误'
              }
              this.isValids = false
            })
          }
        })
      },
      /* 登录成功后路由跳转 */
      onNext: function () {
        this.$nextTick(() => {
          this.$router.push({ name: 'forum' })
        })
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
      Spin,
      Metas
    },
    computed: {
      verify: function () {
        return this.$store.getters['auth/getVerify']
      }
    },
    watch: {
      verify: function (a, b) {
        if (a === true) this.onNext()
      }
    }
  }
</script>

<style scoped>
  >>> .ivu-form-item-content {
    line-height: 15px;
  }

  .login-card {
    top: 10vh;
    width: 100vw;
    position: fixed;
  }


  .login-title {
    display: flow-root;
  }

  .login-card-center {
    color: #fff;
    margin-bottom: 45px;
    text-align: center;
  }

  .login-card-center h1 {
    font-weight: 100;
  }

  .login-card-left {
    float: left;
  }

  .login-card-right {
    float: right;
  }

  .login-card-right i {
    font-size: 54px;
    color: #dddddd;
  }

  .login-card-title {
    color: #2c3e50;
    margin-bottom: .75rem;
  }

  .login-card-text:last-child {
    color: #2c3e50;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0;
  }

  .login-form {
    padding: 10px;
  }

  /* 登录一把锁，动画 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }


  /* 调整其他登录方式 Icon图标大小及位置 */
  >>> .ivu-avatar-large i {
    /*font-size: 24px;*/
  }

  >>> .ivu-avatar-large {
    width: 35px;
    height: 35px;
    align-items: center;
    display: flex;
  }

  >>> .ivu-avatar-large span {
    /*margin: auto;*/
    /*text-align: center;*/
    /*line-height: 36px !important;*/
    /*margin-left: -2.5px;*/
  }

  >>> .ivu-card {
    background: rgba(255, 255, 255, 0.9);
  }

  .login-icon-item {
    margin: 5px;
    padding: 5px;
    display: inline-block;
  }


  .login {
    list-style: none;
    text-align: center;
  }

  .login li {
    display: inline;
  }


</style>

