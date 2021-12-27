import request from '@/utils/request'

/**
 * 用户登录
 * @param {用户信息} data
 * @returns
 */
export function login(data) {
  return request({
    url: '/login/login',
    method: 'post',
    data,
  })
}

/**
 * 用户退出
 * @returns
 */
export function logout() {
  return request({
    url: '/login/logout',
    method: 'get',
  })
}

/**
 * 用户注册
 * @param {用户注册信息}} data
 * @returns
 */
export function register(data) {
  return request({
    url: '/sys-user/unAuth/regieter',
    method: 'post',
    data,
  })
}