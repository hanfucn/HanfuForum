<template>
  <div class="forum-header">
    <forum-header :searchAutoComplete="searchAutoComplete" :searchAutoCompleteData="searchAutoCompleteData"></forum-header>

    <Row type="flex" justify="center" class="center-text">
      <div class="forum-header-context center-text">
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

          <!-- 文章板块 -->

          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="县城的房价会跌吗？乡村的房子就是县城房子的明天！只有居住属性"
            message="春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价..."
            fieryNumber="1544"
          ></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="县城的房价会跌吗？乡村的房子就是县城房子的明天！只有居住属性"
            message="春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价..."
            fieryNumber="1544"
          ></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="县城的房价会跌吗？乡村的房子就是县城房子的明天！只有居住属性"
            message="春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价..."
            fieryNumber="1544"
          ></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="县城的房价会跌吗？乡村的房子就是县城房子的明天！只有居住属性"
            message="春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价春节结束，人们陆续离开家乡，来到大城市，改革开放三十年，经济快速发展，同时，房价高速增长，一部分人幸运的从农村走了出来，落户大城市，但是随著房价..."
            fieryNumber="1544"
          ></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="true"
            title="三生三世凤尾归来"
            message="少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你少绾刚说完话，姬蘅就吓得差点瘫坐在地上，颤抖的说“吾已经嫁给帝君，是天族的人，魔族管不了我的。”刚说完，凤九就说到“哼！天组之人，可你别忘了，你..."
            fieryNumber="25.4k"
            :activity="true"
            :images="require('../../assets/0.jpg')"></ArticleBlock>
          <ArticleBlock
            :fiery="false"
            title="以人类现在的科技水平能把月亮炸掉吗？"
            message="假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是假设我们没有任何理由，就是想炸掉月亮，什么办法才能做到呢？ 月亮作为我们地球唯一的天然卫星，重达7350亿亿吨，直径约是地球的四分之一，也就是3..."
            fieryNumber="1544"
            :images="require('../../assets/1.jpg')"></ArticleBlock>


          <!-- 文章板块 -->

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
    Menu,
    MenuItem,
    Icon,
    Submenu,
    MenuGroup,
    Input,
    Button,
    Row,
    Col,
    Card,
    Carousel,
    CarouselItem,
    AutoComplete,
    Divider,
    Breadcrumb,
    BreadcrumbItem,
    BackTop
  } from 'iview'
  import forumHeader from '@/components/forum/forumHeader'
  import ArticleBlock from '@/components/forum/ArticleBlock'

  export default {
    name: 'index',
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
        ],
        s: [
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
      }
    },
    components: {
      Menu,
      MenuItem,
      Icon,
      Submenu,
      MenuGroup,
      Input,
      Button,
      Row,
      Col,
      Card,
      Carousel,
      CarouselItem,
      AutoComplete,
      Divider,
      Breadcrumb,
      BreadcrumbItem,
      ArticleBlock,
      BackTop,
      'forum-header': forumHeader
    }
  }
</script>

<style scoped>


  .forum-header-context {
    width: 60%;
  }

  .center-text {
    margin-top: 10px;
  }

  .center-text img {
    width: 100%;
    border-radius: 5px;
  }




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
