export default {
  /* 获取JwtToken令牌 */
  GetJwtToken: function () {
    sessionStorage.getItem('token')
  },
  /* 设置JwtToken令牌
   * @param {String} token 令牌 */
  SetJwtToken: function (token) {
    sessionStorage.setItem('token', token)
  },
  /* 移除JwtToken令牌 */
  DelJwtToken: function () {
    sessionStorage.removeItem('token')
  },
  /* 清除 sessionStorage 对象所有的项
   * 慎用 */
  Clear: function () {
    sessionStorage.clear()
  },
  /* 获取一个值 */
  Get: function (key) {
    sessionStorage.getItem(key)
  },
  /* 存入一个值 */
  Set: function (key, value) {
    sessionStorage.setItem(key, value)
  },
  /* 删除一个值 */
  Del: function (key) {
    sessionStorage.removeItem(key)
  }
}
