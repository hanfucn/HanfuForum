<template>
    <div class="forum-header">
        <forum-header :searchAutoComplete="searchAutoComplete"
                      :topHeader="topHeader" :topAuthUser="topAuthUser"></forum-header>
        <router-view name="default"></router-view>
    </div>
</template>

<script>
  import forumHeader from '@/components/forum/forumHeader'

  export default {
    name: 'forumIndex',
    inject: [
      'loginSigout',
      'username'
    ],
    components: {
      'forum-header': forumHeader
    },
    data () {
      return {
        searchAutoComplete: '',
        topHeader: [
          {
            toRouter: {
              name: 'index'
            },
            name: '活动',
            icon: 'ios-document',
            run: null,
            children: [
              {
                title: '汉服汉礼公祭轩辕黄帝大典',
                count: 10000,
                default: true, // 官方活动
                message: '人参与',
                toRouter: {
                  name: 'index'
                },
                run: null
              },
              {
                title: '周日陶然亭户外拍摄',
                count: 60100,
                default: false, // 官方活动
                message: '人参与',
                toRouter: {
                  name: 'index'
                },
                run: null
              },
              {
                title: '周六后海夜景拍摄',
                count: 30010,
                default: false, // 官方活动
                message: '人参与',
                toRouter: {
                  name: 'index'
                },
                run: null
              }
            ]
          },
          {
            toRouter: {
              name: 'index'
            },
            name: '文章',
            icon: 'ios-document',
            run: null,
            children: [
              {
                title: '什么是汉服',
                count: 100000,
                default: false, // 官方活动
                message: '人参与',
                toRouter: {
                  name: 'index'
                },
                run: null
              }
            ]
          }
        ],
        topAuthUser: {
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
              run: this.outLogin
            }
          ]
        }
      }
    },
    methods: {
      outLogin: function () {
        this.$store.commit('auth/clearAutherization')
        this.reload()
      }
    }
  }
</script>

<style scoped>
    >>> .ivu-menu-horizontal.ivu-menu-light:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: unset;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .demo-auto-complete-group span {
        color: #666;
        font-weight: bold;
    }

    .demo-auto-complete-group a {
        float: right;
    }

</style>
