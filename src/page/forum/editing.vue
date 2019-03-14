<template>
  <Row>
    <Col span="4" class="menu">
      <div class="menu-backup">
        <Button class="button" type="warning" shape="circle" ghost :to="{name: 'forum'}">返回首页</Button>
      </div>
    </Col>
    <Col span="10" class="border-right">
      <Card :bordered="false" dis-hover>
        <template slot="title">
          <Input v-model="title" placeholder="无标题。。。"/>
        </template>
        <tinycme-vue v-model="value"></tinycme-vue>
      </Card>
    </Col>

    <Col span="10">
      <Card :bordered="false" dis-hover>
        <div>
          <div v-if="title">{{ title }}</div>
          <span v-else class="font-color">无标题...</span>
        </div>
        <Divider orientation="left">预览</Divider>
        <div class="context-text" v-html="value"></div>
      </Card>
    </Col>

  </Row>
</template>

<script>
  import TinycmeVue from '@/components/editor/TinycmeVue'
  import {
    Row,
    Col,
    Input,
    Divider,
    Button
  } from 'iview'

  export default {
    name: 'editing',
    data: function () {
      return {
        title: '',
        value: 'asdasdsa'
      }
    },
    components: {
      'tinycme-vue': TinycmeVue,
      Row,
      Col,
      Input,
      Divider,
      Button
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
</style>
