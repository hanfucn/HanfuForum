/* 接口请求错误 */

/* 捕获接口Token签名过期异常
 * 签名过期调用 then
 * 签名未过期调用 catch */
export async function InterfaceSignatureExpiredExist (e) {
  return await new Promise(function (resolve, reject) {
    if (e.status === 401 && e.statusText === 'Unauthorized') if (e.data.detail === 'Signature has expired.') resolve(e)
    reject(e)
  })
}
