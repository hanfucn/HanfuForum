/*

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

 */
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
