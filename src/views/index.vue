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

    <Menu mode="horizontal" theme="light" active-name="1" class="main-header">
      <div class="float-left">
        <MenuItem name="0">
          <Icon type="ios-paper" />
        </MenuItem>
        <MenuItem name="1">
          <Icon type="ios-paper" />
          活动
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />
          摄影
        </MenuItem>
        <MenuItem name="3" :to="{name: 'forum'}">
          <Icon type="ios-people" />
          论坛
        </MenuItem>
      </div>
      <div class="float-right">
        <MenuItem name="4">
          <Icon type="md-contact" />
          登录
        </MenuItem>
      </div>

    </Menu>

    <Carousel loop class="main-index">
      <CarouselItem>
        <div class="index-image">
          <img src="../assets/0.jpg" alt="">
          <div class="index-context">
            111
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="index-image">
          <img src="../assets/1.jpg" alt="">
          <div class="index-context">
            222
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>

</template>

<script>
  import {
    Carousel,
    CarouselItem,
    Menu,
    MenuItem,
    Icon
  } from 'iview'

  export default {
    name: 'index',
    data: function () {
      return {}
    },
    components: {
      Carousel,
      CarouselItem,
      Menu,
      MenuItem,
      Icon
    }
  }
</script>

<style scoped>
  .main-index {
    overflow: hidden;
  }
  .index-image {
    position: relative;
    /*overflow: hidden;*/
    height: 100vh;
  }
  .index-image img {
    width: 100%;
    height: 100%;
    /*position: absolute;*/
  }
  .index-context {
    top: 60px;
    position: absolute;
  }
  .main-header {
    width: 100%;
    height: auto;
    position: absolute;
  }
  >>> .ivu-menu-light {
    background: rgba(255,255,255, 0.5);
  }
  >>> .ivu-menu-horizontal.ivu-menu-light:after {
    background: rgba(255,255,255, 0.2);
  }
  .float-right {
    float: right;
  }
  .float-left {
    float: left;
  }
</style>
