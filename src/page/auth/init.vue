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

<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div>
    <swiper :options="swiperOption" class="aaa">
      <swiper-slide>
        <img src="../../assets/0.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/1.jpg">
      </swiper-slide>
    </swiper>

    <div class="container pt-3 mt-5" id="login">
      <div class="row justify-content-md-center mt-5">
        <div class="col-12 mb-5 text-center mt-5">
          <h1 class="text-white mt-5" style="font-weight: 100;">未来办公网
            <!--<small>后台登录</small>-->
          </h1>
          <div class="m-auto">
            <p class="text-white">
              统一商品信息出入管理平台，统一库存进销存管理平台
              <!-- —— 致力打造高效智慧办公一体化生态圈 -->
            </p>
          </div>
        </div>
        <router-view name="auth_init"></router-view>
      </div>
    </div>
  </div>
</template>


<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'auth-init',
    data: function () {
      return {
        banners: [
          require('@/assets/1.jpg')
        ],
        swiperOption: {
          autoplay: true,
          delay: 10000,
          speed: 1000,
          loop: true,
          effect: 'fade'
        }
      }
    },
    mounted: function () {
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>


<style scoped>

  .auth {
    height: 100vh;
  }

  .aaa {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 0;
  }

</style>
