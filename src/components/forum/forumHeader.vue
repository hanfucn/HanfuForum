<template>

    <Header class="index-header" style="    border-bottom: 1px solid #e8eaec;">
        <b-navbar toggleable="lg">

            <b-navbar-brand href="#" left>
                <div class="layout-logo">
                    <img style="height: 35px;" :src="require('@/assets/logo.png')">
                </div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" @click="onCollapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="container">
                    <Menu mode="horizontal" theme="light" :active-name="topActive" :mode="mode"
                          @on-select="onSelectModeList" width="100">
                        <MenuItem :name="item.name" v-for="(item, key) in topHeader" :key="key" :to="item.toRouter">
                            <Icon :type="item.icon" v-if="item.icon"/>
                            {{ item.name }}
                        </MenuItem>
                        <AutoComplete
                                v-model="searchAutoComplete"
                                icon="ios-search"
                                class="ml-4"
                                placeholder="搜索一下更健康"
                                style="width:300px;">
                            <div class="demo-auto-complete-item" v-for="item in searchAutoCompleteData">
                                <div class="demo-auto-complete-group">
                                    <span>{{ item.title }}</span>
                                    <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
                                </div>
                                <Option v-for="option in item.children" :value="option.title" :key="option.title">

                                    <div v-if="option.default">
                                    <span class="demo-auto-complete-title font-red">
                                      {{ option.title }}
                                      <Icon type="ios-flag"/>
                                    </span>
                                        <span class="demo-auto-complete-count font-red">{{ option.count }} {{ option.message }}</span>
                                    </div>
                                    <div v-else>
                                        <span class="demo-auto-complete-title">{{ option.title }}</span>
                                        <span class="demo-auto-complete-count">{{ option.count }} {{ option.message }}</span>
                                    </div>

                                </Option>
                            </div>
                            <a href="https://www.google.com/search?q=iView" target="_blank"
                               class="demo-auto-complete-more">查看所有结果</a>
                        </AutoComplete>
                    </Menu>
                </b-navbar-nav>

                <b-navbar-nav right>
                    <Button type="primary" shape="circle" class="button-margin-10 "
                            style="margin-right: 15px; color: aliceblue;"
                            v-on:click="ArticleCreate()"
                            :to="{name: 'editing'}">写文章
                    </Button>
                    <template v-if="!IsVerify">
                        <Button type="text" :to="{name: 'login'}">登录</Button>
                        <Button type="warning" ghost shape="circle" class="button-margin-10"
                                :to="{name: 'register'}">注册
                        </Button>
<!--                        <Button type="primary" shape="circle" class="button-margin-10" :to="{name: 'login'}">写文章</Button>-->
                    </template>
                    <template v-else>
                        <Dropdown @on-click="onDropdownMenu">
                            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                            <DropdownMenu slot="list">
                                <DropdownItem v-for="(item, key) in topAuthUser" :key="key">
                                    <Icon class="md-icon" :type="item.icon"/>
                                    {{item.name}}
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </template>
                    <!--<Button type="success" ghost shape="circle" class="button-margin-10" :to="{name: 'login'}" icon="md-flag">活动</Button>-->

                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </Header>

</template>

<script>

  import {
    Layout,
    Header,
    Menu,
    MenuItem,
    Icon,
    Sider,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Content,
    Affix,
    Button,
    Row,
    Col,
    MenuGroup,
    Avatar,
    AutoComplete,
    Option,
    DropdownMenu,
    DropdownItem
  } from 'iview'

  import {
    BNavbar,
    BNavbarNav,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavItem,
    BNavForm,
    BFormInput,
    BNavItemDropdown,
    BDropdownItem
  } from 'bootstrap-vue'

  import Axios from '@/axios/index'

  export default {
    name: 'forum-header',
    inject: [
      'loginSigout',
      'username'
    ],
    data: function () {
      return {
        /**
         * mode: 侧边栏 皮肤
         */
        mode: 'horizontal',
        IsVerify: false // 登录状态
      }
    },
    created () {
      /**
       * 设置用户名
       */
      this.IsVerify = this.$store.getters['auth/getVerify']
      if (!this.topAuthUser.auth.username) return this.topAuthUser.auth.username = this.username()
    },
    props: {
      searchAutoComplete: {
        type: String
      },
      searchAutoCompleteData: {
        type: Array
      },
      topName: {
        type: String,
        default: () => {
          /**
           * topName: 头部导航栏 logo信息，网站名称
           */
          return '汉服行'
        }
      },
      topActive: {
        /**
         * topActive: 头部导航菜单索引
         */
        type: String,
        default: () => {
          return ''
        }
      },
      topHeader: {
        /**
         * topHeader: 头部导航菜单 菜单项
         */
        type: Array,
        default: () => {
          return [
            /**
             * name: 菜单名称
             * icon: 菜单ico图标
             * run: 菜单运行的方法，可预定义
             * toRouter: 路由信息
             */
            {
              toRouter: {
                name: 'index'
              },
              name: 'Hanfu',
              icon: 'ios-document',
              run: null
            }
          ]
        }
      },
      topAuthUser: {
        /**
         * topAuthUser: 头部导航栏菜单 用户信息菜单
         */
        type: Object,
        default: () => {
          return {
            /**
             * auth: 用户信息
             * menu: 菜单列表
             * */
            auth: {
              /**
               * username: 用户名
               * headimage: 头像地址
               * */
              username: null,
              headimage: require('@/assets/599a521472424.jpg')
            },
            menu: [
              /**
               * name: 分组名称
               * childrem: 分组列表
               * */
              {
                toRouter: {
                  name: 'forum'
                },
                name: '收藏的文章',
                icon: 'md-bookmark',
                run: null
              },
              {
                toRouter: {
                  name: 'forum'
                },
                name: '喜欢的文章',
                icon: 'md-heart',
                run: null
              },
              {
                toRouter: {
                  name: 'forum'
                },
                name: '参加的活动',
                icon: 'md-flag',
                run: null
              },
              {
                toRouter: {
                  name: 'forum'
                },
                name: '帮助与反馈',
                icon: 'md-text',
                run: null
              },
              {
                toRouter: {
                  name: 'forum'
                },
                name: '退出',
                icon: 'md-exit',
                run: null // this.outLogin
              }
            ]
          }
        }
      }
    },
    components: {
      'b-navbar': BNavbar,
      'b-navbar-nav': BNavbarNav,
      'b-navbar-brand': BNavbarBrand,
      'b-navbar-toggle': BNavbarToggle,
      'b-collapse': BCollapse,
      'b-nav-item': BNavItem,
      'b-nav-form': BNavForm,
      'b-form-input': BFormInput,
      'b-nav-item-dropdown': BNavItemDropdown,
      'b-dropdown-item': BDropdownItem,
      Layout,
      Header,
      Menu,
      MenuItem,
      Icon,
      Sider,
      Submenu,
      Breadcrumb,
      BreadcrumbItem,
      Content,
      Affix,
      Button,
      Row,
      Col,
      MenuGroup,
      Avatar,

      AutoComplete,
      Option,
      DropdownMenu,
      DropdownItem
    },
    methods: {
      onDropdownMenu: function (command) {
        for (let i = 0; i < this.topAuthUser.menu; i++) {
          if (this.topAuthUser.menu[i].run) this.topAuthUser.menu[i].run()
        }
      },
      outLogin: function () {
        this.$store.commit('auth/clearAutherization')
        this.reload()
      },
      onCollapse (e) {
        /**
         * 头部菜单
         * 自适应功能，小屏点击展开菜单触发
         * 将菜单展示方式改为 竖屏方式
         */
        if (this.mode === 'horizontal') {
          this.mode = 'vertical'
        } else if (this.mode === 'vertical') {
          this.mode = 'horizontal'
        }
      },
      authUserSelect (name) {
        /**
         * Menu菜单 头部用户部分
         **/
        for (let i = 0; i < this.topAuthUser.menu.length; i++) {
          /**
           * 实习头部导航菜单 run 方法
           */
          for (let e = 0; e < this.topAuthUser.menu[i].childrem.length; e++) {
            if (this.topAuthUser.menu[i].childrem[e].name === name) {
              if (this.topAuthUser.menu[i].childrem[e].name === name) {
                /**
                 * run 方法
                 */
                console.log(this.topAuthUser.menu[i].childrem[e].name)
                if (this.topAuthUser.menu[i].childrem[e].run) this.topAuthUser.menu[i].childrem[e].run()
              }
            }
          }
        }

      },
      onSelectModeList (name) {
        /**
         * Menu菜单 侧边栏菜单部分
         **/
        for (let i = 0; i < this.topHeader.length; i++) {
          if (this.topHeader[i].name === name) {

            /**
             * 选择菜单时触发
             * */
            this.$emit('on-select', this.topHeader[i])

            /**
             * 运行 item.run 方法
             **/
            if (this.topHeader[i].run) {
              /**
               * 运行 item.run 方法前回调
               */
              this.$emit('on-run-start', this.topHeader[i])

              /**
               * 运行 item.run 方法
               */
              this.topHeader[i].run()

              /**
               * 运行 item.run 方法后回调
               */
              this.$emit('on-run-end', this.topHeader[i])
            }
          }
        }
      },
      ArticleCreate: function () {
        Axios.article('POST', {
          status: 1
        }).then(response => {
          console.log('create ', response.data.id)
          this.$store.commit('forumHeader/setArticleId', response.data.id)
        })
      }
    },
    computed: {
      verify: function () {
        return this.$store.getters['auth/getVerify']
      },
      // getArticleId: function () {
      //   return this.$store.getters['forumHeader/getArticleId']
      // }
    },
    watch: {
      verify: function (a, b) {
        this.IsVerify = a
      },
      // getArticleId:function (a, b) {
      //   this.$emit('article-id', a)
      // }
    }
  }
</script>

<style scoped>
    /*.index-header nav {*/
    /*    padding: 0;*/
    /*}*/

    .index-header >>> .ivu-layout-sider-trigger {
        color: #515a6e;
        background: #fff;
    }

    .layout-logo {
        /*width: 100px;*/
        /*border-radius: 3px;*/
        /*float: left;*/
        /*position: relative;*/
        /*left: 0;*/
        /*!*line-height: 1.2;*!*/
        /*color: #78baff;*/
        /*font-weight: bolder;*/
        /*font-size: xx-large;*/
    }

    /*>>> .navbar-nav {*/
    /*    display: inline !important;*/
    /*}*/


    .margin-right {
        margin-right: 15px;
    }

    .forum-header-border {
        border-bottom: 1px solid #dcdee2;
    }

    .font-red {
        color: red;
    }

    .md-icon {
        color: #258cd1;
        font-weight: bold;
    }

    .demo-auto-complete-item {
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }

    .demo-auto-complete-group {
        font-size: 12px;
        padding: 4px 6px;
    }

    .demo-auto-complete-count {
        float: right;
        color: #999;
    }

    .demo-auto-complete-more {
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>
