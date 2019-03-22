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
        placeholder="搜索一下更健康"
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
        <template v-if="!IsVerify">
          <Button type="text" :to="{name: 'login'}">登录</Button>
          <Button type="warning" ghost shape="circle" class="button-margin-10" :to="{name: 'register'}">注册</Button>
          <Button type="primary" shape="circle" class="button-margin-10" :to="{name: 'login'}">写文章</Button>
        </template>
        <template v-else>
          <Dropdown @on-click="onDropdownMenu">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
            <DropdownMenu slot="list">
              <DropdownItem>
                <Icon class="md-icon" type="md-person"/>
                我的主页
              </DropdownItem>
              <DropdownItem>
                <Icon class="md-icon" type="md-bookmark"/>
                收藏的文章
              </DropdownItem>
              <DropdownItem>
                <Icon class="md-icon" type="md-heart" />
                喜欢的文章
              </DropdownItem>
              <DropdownItem>
                <Icon class="md-icon" type="md-flag"/>
                参加的活动
              </DropdownItem>
              <DropdownItem>
                <Icon class="md-icon" type="md-text"/>
                帮助与反馈
              </DropdownItem>
              <DropdownItem name="outlogin">
                <Icon class="md-icon" type="md-exit"/>
                退出
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button type="primary" shape="circle" class="button-margin-10" :to="{name: 'editing'}">写文章</Button>
        </template>
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
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Avatar
  } from 'iview'

  export default {
    name: 'forum-header',
    inject: ['reload'],
    data: function () {
      return {
        IsVerify: false // 登录状态
      }
    },
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
      Button,
      Dropdown,
      DropdownMenu,
      DropdownItem,
      Avatar
    },
    methods: {
      onDropdownMenu: function (command) {
        if (command === 'outlogin') this.outLogin()
        console.log(command)
      },
      outLogin: function () {
        this.$store.commit('auth/clearAutherization')
        this.reload()
      }
    },
    created: function () {
      this.IsVerify = this.$store.getters['auth/getVerify']
    },
    computed: {
      verify: function () {
        return this.$store.getters['auth/getVerify']
      }
    },
    watch: {
      verify: function (a, b) {
        this.IsVerify = a
      }
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

  .md-icon {
    color: #258cd1;
    font-weight: bold;
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
