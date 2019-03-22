import Cookies from '@/utils/Cookie'

export default {
  /* 验证是否登录
   * @return [true/false] [登录/未登录] */
  IsLogin: function () {
    const autherization = Cookies.getCookieAutherization()
    if (autherization.token && autherization.username) return true
    return false
  }
}
