<template>
  <Row type="flex" justify="center" class="forum-header-border">
    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem name="1">
        <Icon type="md-home"/>
        首页
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="md-flag"/>
          活动
        </template>
        <MenuGroup title="活动">
          <MenuItem name="3-1">创建活动</MenuItem>
          <MenuItem name="3-2">历史活动</MenuItem>
        </MenuGroup>
      </Submenu>
      <!--<Input search placeholder="Enter something..." class="input-search"/>-->
      <AutoComplete
        v-model="searchAutoComplete"
        icon="ios-search"
        placeholder="input here"
        style="width:300px">
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
        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
      </AutoComplete>
      <div class="float-right margin-right">
        <Button type="text" :to="{name: 'login'}">登录</Button>
        <Button type="warning" ghost shape="circle" class="button-margin-10" :to="{name: 'register'}">注册</Button>
        <Button type="primary" shape="circle" class="button-margin-10" :to="{name: 'editing'}">写文章</Button>
      </div>
    </Menu>
  </Row>
</template>

<script>
  import {
    Row,
    Menu,
    MenuItem,
    Submenu,
    Icon,
    MenuGroup,
    AutoComplete,
    Option,
    Button
  } from 'iview'

  export default {
    name: 'forum-header',
    props: {
      searchAutoComplete: {
        type: String
      },
      searchAutoCompleteData: {
        type: Array
      }
    },
    components: {
      Row,
      Menu,
      MenuItem,
      Submenu,
      Icon,
      MenuGroup,
      AutoComplete,
      Option,
      Button
    }
  }
</script>

<style scoped>
  .margin-right {
    margin-right: 15px;
  }

  .forum-header-border {
    border-bottom: 1px solid #dcdee2;
  }

  .font-red {
    color: red;
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
