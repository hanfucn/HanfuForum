
const auth = {
  authorization: 'account/authorization/',
  authorizationRefresh: 'account/authorization-refresh/',
  authorizationVerify: 'account/authorization-verify/',
  authorizationRegister: 'account/authorization-register/'
}

const app = {
  article: 'app/article/'
}

/*
 * 获取Jwt Token令牌
 * @url /account/authorization/
 * @param {Number} index 接口索引 */
export function authorization (index = null) {
  if (index) return auth.authorization + index + '/'
  return auth.authorization
}

/*
 * 刷新Jwt Token令牌
 * @url /account/authorization-refresh/
 * @param {Number} index 接口索引 */
export function authorizationRefresh (index = null) {
  if (index) return auth.authorizationRefresh + index + '/'
  return auth.authorizationRefresh
}

/*
 * 验证Jwt Token令牌
 * @url /account/authorization-verify/
 * @param {Number} index 接口索引 */
export function authorizationVerify (index = null) {
  if (index) return auth.authorizationVerify + index + '/'
  return auth.authorizationVerify
}

/*
 * 用户注册
 * @url /account/authorization-register/
 * @param {Number} index 接口索引 */
export function authorizationRegister (index = null) {
  if (index) return auth.authorizationRegister + index + '/'
  return auth.authorizationRegister
}

/*
 * 用户注册
 * @url /app/article/
 * @param {Number} index 接口索引 */
export function article (index = null) {
  if (index) return app.article + index + '/'
  return app.article
}
