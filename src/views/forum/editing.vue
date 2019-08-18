<template>
  <Row>
    <Col span="4" class="menu">
      <div class="menu-backup">
        <Button class="button" type="warning" shape="circle" ghost :to="{name: 'forum'}">返回首页</Button>
      </div>
      <div class="menu-backup">
        <Button v-if="isVerify" class="button" type="info" shape="circle" ghost v-on:click="onPublish">发布文章</Button>
        <Button v-else class="button" type="info" shape="circle" ghost disabled>发布文章</Button>
      </div>

      <div class="menu-backup" style="padding: 20px">

        <div class="demo-upload-list" v-for="item in uploadFileImage">
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline"></Icon>
              <Icon type="ios-trash-outline"></Icon>
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>

      </div>
    </Col>

    <Col span="20" class="border-right">
      <Card :bordered="false" dis-hover>
        <template slot="title">
          <Input v-model="title" placeholder="无标题。。。"/>
        </template>
        <markdown v-model="text"
                  :headers="headers"
                  @on-value="gethtml"
                  :initialValue="initialValue"></markdown>
      </Card>
    </Col>
    <div v-if="isUpload.default">
      <Spin fix>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
        <div>{{ isUpload.message }}</div>
      </Spin>
    </div>

  </Row>
</template>

<script>
  import config from '@/../dev.env'
  import Axiox from '@/axios/index'
  import Cookies from '@/utils/Cookie'
  import markdown from '@/components/markdown/index'
  import {
    Row,
    Col,
    Input,
    Divider,
    Button,
    Upload,
    Spin,
    Icon
  } from 'iview'

  const Autherization = Cookies.getCookieAutherization()

  export default {
    name: 'forumEditing',
    data: function () {
      return {
        pid: null,
        isVerify: false,
        userId: Number(Autherization.pk),
        title: '',
        text: '',
        html: '',
        initialValue: '',
        uploadFileImage: [],
        isUpload: {
          default: false,
          message: '正在保存...'
        },
        data: {
          name: '',
          text: '',
          images: null,
          user: Number(Autherization.pk)
        },
        fileList: [
          // {
          //   name: '2019-03-20_120835.jpg',
          //   url: 'http://127.0.0.1:8000/media/article-image/1553054915/2019-03-20_120835.jpg'
          // }
        ],
        headers: {
          Authorization: config.API.TOKENPREFIX + ' ' + Autherization.token
        },
        tinymceHtml: ''
      }
    },
    mounted: function () {
      /* eslint-disable */
    },
    components: {
      markdown,
      Row,
      Col,
      Input,
      Divider,
      Button,
      Upload,
      Spin,
      Icon
    },
    methods: {
      gethtml: function (html) {
        this.html = html
        console.log('html', html)
      },
      // 上传文件之前
      beforeUpload: function (file) {
        return true
      },
      // 文件上传时
      onUploadProgress: function (event, file, fileList) {
      },
      // 文件上传成功
      onUploadSuccess: function (response, file, fileList) {
        console.log(response)
        this.pid = response.id
        this.uploadFileImage.push({
          name: response.images.split('/')[-1],
          url: response.images
        })
      },
      // 文件上传失败
      onUploadError: function (error, file, fileList) {
        if (error) {
        }
      },
      // 点击已上传的文件
      onUploadPreview: function (file) {
        // 通过 file.response 拿到服务端返回数据
      },
      // 文件列表移除文件
      onUploadRemove: function (file, fileList) {
      },
      // 上传
      onPublish: function () {
        let method = 'POST'
        let index = null
        const datas = {
          user: this.articleUser,
          verify: true
        }
        console.log(this.data)
        if (this.pid) {
          method = 'PUT'
          index = this.pid
        }

        if (this.title) datas['name'] = this.title
        if (this.html) datas['text'] = this.html
        this.isUpload.default = true
        Axiox.article(method, datas, index).then(response => {
          this.pid = response.id
          setTimeout(() => {
            setTimeout(() => {
              this.isUpload.default = false
              this.$router.push({
                name: 'forum'
              })
            }, 300)
            this.isUpload.message = '已保存，正在跳转'
          }, 200)
        })
      },
      isVerifys: function () {
        if (this.title && this.text) {
          this.isVerify = true
        } else {
          this.isVerify = false
        }
      }
    },
    computed: {
      articleUser: function () {
        return Number(Autherization.pk)
      },
      articleName: function () {
        return this.title
      },
      articleText: function () {
        return this.text
      },
      articleUploadFileImage: function () {
        return this.uploadFileImage
      }
    },
    watch: {
      articleName: function (a, b) {
        this.data.name = a
        this.isVerifys()
      },
      articleText: function (a, b) {
        this.data.text = a
        this.isVerifys()
      },
      articleUploadFileImage: function (a, b) {
        this.data.images = a
      }
    }
  }
</script>

<style scoped>
  .border-right {
    border-right: 1px solid #eff1f2;
    border-left: 1px solid #eff1f2;
  }

  .menu {
    background-color: #404040;
    height: -webkit-fill-available;
    color: #f2f2f2;
  }

  .menu > .menu-backup {
    width: 100%;
    margin-top: 15px;
    text-align: center;
  }

  .menu > .menu-backup > .button {
    width: 85%;
  }

  .font-color {
    color: #eff1f2;
  }

  .context-text {
    width: auto;
    overflow: auto;
    height: 650px;
  }

  >>> .ivu-divider-horizontal.ivu-divider-with-text-center, .ivu-divider-horizontal.ivu-divider-with-text-left, .ivu-divider-horizontal.ivu-divider-with-text-right {
    margin: 12px 0;
  }

  >>> .ivu-upload-drag {
    background: unset;
  }

  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }

  @keyframes ani-demo-spin {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
</style>
