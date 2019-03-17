
const auth = {
  authorization: 'authorization/',
  authorizationRefresh: 'authorization-refresh/',
  authorizationVerify: 'authorization-verify/',
  authorizationRegister: 'authorization-register/'
}

/*
 * 获取Jwt Token令牌
 * @url /authorization/
 * @param {Number} index 接口索引 */
export function authorization (index = null) {
  if (index) return auth.authorization + index + '/'
  return auth.authorization
}

/*
 * 刷新Jwt Token令牌
 * @url /authorization-refresh/
 * @param {Number} index 接口索引 */
export function authorizationRefresh (index = null) {
  if (index) return auth.authorizationRefresh + index + '/'
  return auth.authorizationRefresh
}

/*
 * 验证Jwt Token令牌
 * @url /authorization-verify/
 * @param {Number} index 接口索引 */
export function authorizationVerify (index = null) {
  if (index) return auth.authorizationVerify + index + '/'
  return auth.authorizationVerify
}

/*
 * 用户注册
 * @url /authorization-register/
 * @param {Number} index 接口索引 */
export function authorizationRegister (index = null) {
  if (index) return auth.authorizationRegister + index + '/'
  return auth.authorizationRegister
}
