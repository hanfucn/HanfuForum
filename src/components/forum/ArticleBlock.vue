<template>
  <Card dis-hover :bordered="false" class="border-bottom">
    <!--<Divider dashed/>-->
    <Row type="flex" v-if="images">
      <Col span="7" class="text-img">
        <router-link to="/">
          <img :src="images">
        </router-link>
      </Col>
      <Col span="17">
        <div class="forum-text left">
          <h3>
            <router-link to="/">
              {{ title }}
            </router-link>
          </h3>
          <span>{{ message }}</span>
        </div>
        <div class="forum-other">
          <span v-if="fiery" class="font-red"><Icon type="ios-flame"/> {{ fieryNumber }} </span>
          <span v-else><Icon type="md-eye"/> {{ fieryNumber }}</span>
          <span>
            <router-link to="/">
              <Icon type="md-person"/> 小敏子
            </router-link>
          </span>
          <span>
            <router-link to="/">
              <Icon type="ios-chatboxes"/> 25641
            </router-link>
          </span>
          <span v-if="activity">
             <Icon type="md-flag"/> 25641 以报名
          </span>
        </div>
      </Col>
    </Row>
    <Row type="flex" v-else>
      <Col span="24">
        <div class="forum-text left">
          <h3>
            <router-link to="/">
              {{ title }}
            </router-link>
          </h3>
          <span>{{ message }}</span>
        </div>
        <div class="forum-other">
          <span v-if="fiery" class="font-red"><Icon type="ios-flame"/> {{ fieryNumber }} </span>
          <span v-else><Icon type="md-eye"/> {{ fieryNumber }}</span>
          <span>
            <router-link to="/">
              <Icon type="md-person"/> 小敏子
            </router-link>
          </span>
          <span>
            <router-link to="/">
              <Icon type="ios-chatboxes"/> 25641
            </router-link>
          </span>
        </div>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import {
    Card,
    Divider,
    Row,
    Col,
    Icon
  } from 'iview'

  export default {
    name: 'ArticleBlock',
    props: {
      fiery: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      title: {
        type: String,
        default: function () {
          return ''
        }
      },
      message: {
        type: String,
        default: function () {
          return ''
        }
      },
      images: {
        type: String,
        default: function () {
          return null // require('../../assets/0.jpg')
        }
      },
      fieryNumber: {
        type: [Number, String],
        default: function () {
          return 0
        }
      },
      activity: {
        // 是否为活动召集
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    components: {
      Card,
      Divider,
      Row,
      Col,
      Icon
    }
  }
</script>

<style scoped>

  .text-img {
    display: flex;
    align-items: center;
  }

  .center-text img {
    width: 100%;
    border-radius: 5px;
  }

  .forum-text h3 {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: #17233d;
    font-size: 14px;
    font-weight: bold;
  }

  .forum-text span {
    margin-top: 10px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    line-height: 24px;
    color: #808695;
    font-size: 12px;
    font-weight: normal;
  }

  .forum-other, .forum-other a {
    color: #808695;
    font-weight: normal;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 10px;
  }

  .forum-other > span {
    margin-right: 10px;
  }

  .forum-text {
    margin-bottom: 15px;
  }

  .forum-text.left {
    margin-left: 10px;
  }

  .forum-text a {
    color: #17233d;
  }

  .font-red {
    color: red;
  }


  .demo-auto-complete-group span {
    color: #666;
    font-weight: bold;
  }

  .demo-auto-complete-group a {
    float: right;
  }

  .border-bottom {
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  >>> .ivu-card-body {
    padding-bottom: unset;
    padding-top: unset;
    padding-left: unset;
  }

  >>> .ivu-divider-horizontal {
    margin: 10px 0;
  }
</style>
