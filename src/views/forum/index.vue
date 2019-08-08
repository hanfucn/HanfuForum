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
  <div class="forum-header">
    <forum-header :searchAutoComplete="searchAutoComplete"
                  :searchAutoCompleteData="searchAutoCompleteData"></forum-header>

    <router-view name="forumIndex"></router-view>
  </div>
</template>

<script>
  import forumHeader from '@/components/forum/forumHeader'

  export default {
    name: 'forumIndex',
    components: {
      'forum-header': forumHeader
    },
    data () {
      return {
        searchAutoComplete: '',
        searchAutoCompleteData: [
          {
            title: '活动',
            children: [
              {
                title: '汉服汉礼公祭轩辕黄帝大典',
                count: 10000,
                default: true, // 官方活动
                message: '人参与'
              },
              {
                title: '周日陶然亭户外拍摄',
                count: 60100,
                message: '人参与'
              },
              {
                title: '周六后海夜景拍摄',
                count: 30010,
                message: '人参与'
              }
            ]
          },
          {
            title: '文章',
            children: [
              {
                title: '什么是汉服',
                count: 100000,
                message: '人气'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

  >>> .ivu-menu-horizontal {
    width: 80%;
  }

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


  /* 首页轮播 */
  >>> .ivu-carousel-dots-inside {
    bottom: 20px;
  }


  /*.index-image {*/
  /*position: relative;*/
  /*overflow: hidden;*/
  /*}*/
  /*.index-image img {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/


  /**/


  .demo-auto-complete-group span {
    color: #666;
    font-weight: bold;
  }

  .demo-auto-complete-group a {
    float: right;
  }


</style>

<style>
  body {
    margin: 0 !important;
  }

  .forum-context {
    width: 60%;
  }

  .center-text {
    margin-top: 10px;
  }

  .center-text img {
    width: 100%;
    border-radius: 5px;
  }
</style>
