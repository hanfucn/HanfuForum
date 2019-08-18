<template>
    <Card dis-hover :bordered="false" class="border-bottom" style="overflow: hidden;">
        <!--<Divider dashed/>-->
        <Row type="flex" v-if="images">
            <Col :md="7" class="text-img">
                <router-link :to="toRouter()">
                    <img :src="images">
                </router-link>
            </Col>
            <Col :md="17">
                <div class="forum-text left" style="    margin-top: 15px;">
                    <h3>
                        <router-link :to="toRouter()">
                            {{ title }}
                        </router-link>
                    </h3>
                    <span>{{read}}</span>
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
            <Col :md="24">
                <div class="forum-text left">
                    <h3>
                        <router-link :to="toRouter()">
                            {{ title }}
                        </router-link>
                    </h3>
                    <span>{{read}}</span>
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
  import striphtml from 'js-striphtml'

  export default {
    name: 'ArticleBlock',
    props: {
      pageId: {
        type: [String, Number]
      },
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
    },
    computed: {
      read: function () {
        // val就是以获取的msg的值
        return striphtml.stripTags(this.message, ['b'])
      }
    },
    methods: {
      toRouter: function () {
        return {
          name: 'article',
          params: {
            pageId: this.pageId
          }
        }
      }
    }
  }
</script>

<style scoped>

    >>> .ivu-row-flex {
        display: flow-root !important;
    }

    .text-img {
        display: flex;
        align-items: center;
        height: 120px;
        overflow: hidden;
    }

    .center-text img {
        text-align: center;
        border-radius: 5px;
        /*max-height: 120px;*/
        /*max-width: 180px;*/
        max-height: 100%;
        max-width: 100%;
        margin: 0 auto;
    }

    .center-text a {
        margin: 0 auto;
        text-align: center;
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
        padding: 20px 0 20px 0;
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
