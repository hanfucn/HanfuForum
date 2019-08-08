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
  <div>
    <Row type="flex" justify="center" class="center-text">
      <div class="forum-context center-text">
        <Col span="16">

          <!-- 首页轮播图 -->
          <!--<div class="forum-carousel forum-text">-->
          <!--<Carousel loop class="main-index">-->
          <!--<CarouselItem>-->
          <!--<div class="index-image">-->
          <!--<img src="../../assets/0.jpg" alt="">-->
          <!--</div>-->
          <!--</CarouselItem>-->
          <!--<CarouselItem>-->
          <!--<div class="index-image">-->
          <!--<img src="../../assets/1.jpg" alt="">-->
          <!--</div>-->
          <!--</CarouselItem>-->
          <!--</Carousel>-->
          <!--</div>-->
          <!-- 首页轮播图 -->

          <!-- 活动 -->
          <div>
            <!--<ArticleBlock-->
            <!--:fiery="true"-->
            <!--title="三生三世凤尾归来"-->
            <!--message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."-->
            <!--fieryNumber="25.4k"-->
            <!--:activity="true"-->
            <!--:images="require('../../assets/0.jpg')"></ArticleBlock>-->
          </div>
          <!-- 活动 -->
          <!-- 文章 -->
          <ArticleBlock
            v-for="(item, key) in forumAricleList"
            :key="key"
            :pageId="item.id"
            :fiery="false"
            :title="item.name"
            :message="item.text"
            :fieryNumber="item.browse"
            :images="item.images"></ArticleBlock>
          <!-- 文章 -->

        </Col>
        <Col span="8">
          <Card title="活动" icon="md-flag" :padding="0" shadow>
          </Card>
          <Card title="百科" icon="md-bookmarks" :padding="0" shadow>
          </Card>
        </Col>
      </div>
    </Row>

    <BackTop></BackTop>
  </div>
</template>

<script>
  import {
    Row,
    BackTop,
    Col,
    Card
  } from 'iview'
  import Axios from '@/axios/index'
  import ArticleBlock from '@/components/forum/ArticleBlock'

  export default {
    name: 'articleContext',
    components: {
      Row,
      BackTop,
      Col,
      Card,
      ArticleBlock
    },
    data () {
      return {
        forumAricleList: []
      }
    },
    created: function () {
      Axios.article('GET', {
        verify: true
      }).then(response => {
        this.forumAricleList = response.data.results
      })
    }
  }
</script>

<style scoped>

</style>
