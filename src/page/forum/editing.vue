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

        <Upload
          ref="upload"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          type="drag"
          name="images"
          :paste="true"
          :data="data"
          :headers="headers"
          :default-file-list="fileList"
          :before-upload="beforeUpload"
          :on-progress="onUploadProgress"
          :on-success="onUploadSuccess"
          :on-error="onUploadError"
          :on-preview="onUploadPreview"
          :on-remove="onUploadRemove"
          action="http://127.0.0.1:8000/app/article/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>请上传文章封面图，用于首页效果展示</p>
          </div>
        </Upload>
      </div>
    </Col>

    <Col span="10" class="border-right">
      <Card :bordered="false" dis-hover>
        <template slot="title">
          <Input v-model="title" placeholder="无标题。。。"/>
        </template>
        <tinycme-vue v-model="text"></tinycme-vue>
      </Card>
    </Col>

    <Col span="10">
      <Card :bordered="false" dis-hover>
        <div>
          <div v-if="title">{{ title }}</div>
          <span v-else class="font-color">无标题...</span>
        </div>
        <Divider orientation="left">预览</Divider>
        <div class="context-text" v-html="text"></div>
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
  import config from '@/../config/dev.env'
  import Axiox from '@/axios/index'
  import Cookies from '@/utils/Cookie'
  import TinycmeVue from '@/components/editor/TinycmeVue'
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
        tinymceHtml: '',
        /* eslint-disable */
        setting: {
          height: 200,
          language_url: 'langs/zh_CN.js',
          block_formats: 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;'
        },
        DefaultConfig: {
          // GLOBAL
          theme: 'modern',
          height: 548,
          menubar: false,
          toolbar: `styleselect | fontselect | formatselect | fontsizeselect | forecolor backcolor | bold italic underline strikethrough | image  media | table | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | preview removeformat  hr | paste code  link | undo redo | fullscreen `,
          plugins: `
            paste
            importcss
            image
            code
            table
            advlist
            fullscreen
            link
            media
            lists
            textcolor
            colorpicker
            hr
            preview
            visualblocks
            textpattern
            autolink
            charmap
            print
            anchor
            pagebreak
            searchreplace
            wordcount
            visualchars
            insertdatetime
            nonbreaking
            save
            contextmenu
            directionality
            emoticons
            template
            paste
          `,
          // CONFIG
          forced_root_block: 'p',
          force_p_newlines: true,
          importcss_append: true,

          // CONFIG: ContentStyle 这块很重要， 在最后呈现的页面也要写入这个基本样式保证前后一致， `table`和`img`的问题基本就靠这个来填坑了
          content_style: `
            *                         { padding:0; margin:0; }
            html, body                { height:100%; }
            img                       { max-width:100%; display:block;height:auto; }
            a                         { text-decoration: none; }
            iframe                    { width: 100%; }
            p                         { line-height:1.6; margin: 0px; }
            table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
            .mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
            ul,ol                     { list-style-position:inside; }
          `,

          insert_button_items: 'image link | inserttable',

          // CONFIG: Paste
          paste_retain_style_properties: 'all',
          paste_word_valid_elements: '*[*]',        // word需要它
          paste_data_images: true,                  // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
          paste_convert_word_fake_lists: false,     // 插入word文档需要该属性
          paste_webkit_styles: 'all',
          paste_merge_formats: true,
          nonbreaking_force_tab: false,
          paste_auto_cleanup_on_paste: false,

          // CONFIG: Font
          fontsize_formats: '10px 11px 12px 14px 16px 18px 20px 24px',

          // CONFIG: StyleSelect
          style_formats: [
            {
              title: '首行缩进',
              block: 'p',
              styles: { 'text-indent': '2em' }
            },
            {
              title: '行高',
              items: [
                { title: '1', styles: { 'line-height': '1' }, inline: 'span' },
                { title: '1.5', styles: { 'line-height': '1.5' }, inline: 'span' },
                { title: '2', styles: { 'line-height': '2' }, inline: 'span' },
                { title: '2.5', styles: { 'line-height': '2.5' }, inline: 'span' },
                { title: '3', styles: { 'line-height': '3' }, inline: 'span' }
              ]
            }
          ],

          // FontSelect
          font_formats: `
            微软雅黑=微软雅黑;
            宋体=宋体;
            黑体=黑体;
            仿宋=仿宋;
            楷体=楷体;
            隶书=隶书;
            幼圆=幼圆;
            Andale Mono=andale mono,times;
            Arial=arial, helvetica,
            sans-serif;
            Arial Black=arial black, avant garde;
            Book Antiqua=book antiqua,palatino;
            Comic Sans MS=comic sans ms,sans-serif;
            Courier New=courier new,courier;
            Georgia=georgia,palatino;
            Helvetica=helvetica;
            Impact=impact,chicago;
            Symbol=symbol;
            Tahoma=tahoma,arial,helvetica,sans-serif;
            Terminal=terminal,monaco;
            Times New Roman=times new roman,times;
            Trebuchet MS=trebuchet ms,geneva;
            Verdana=verdana,geneva;
            Webdings=webdings;
            Wingdings=wingdings,zapf dingbats`,

          // Tab
          tabfocus_elements: ':prev,:next',
          object_resizing: true,

          // Image
          imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
        }
      }
    },
    mounted: function () {
      /* eslint-disable */
    },
    components: {
      'tinycme-vue': TinycmeVue,
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
        if (error) {}
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
          verify: true,
        }
        console.log(this.data)
        if (this.pid) {
          method = 'PUT'
          index = this.pid
        }

        if (this.title) datas['name'] = this.title
        if (this.text) datas['text'] = this.text
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
