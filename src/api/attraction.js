import request from '@/utils/request'

/**
 * 添加景点
 * @param {景点信息} data
 * @returns
 */
export function add(data) {
  return request({
    url: '/attraction/auth/add',
    method: 'post',
    data,
  })
}

/**
 * 删除景点
 * @param {景点信息} datat
 * @returns
 */
export function deletes(data) {
  return request({
    url: '/attraction/auth/delete',
    method: 'delete',
    data,
  })
}

/**
 * 修改景点
 * @param {景点信息} data
 * @returns
 */
export function edit(data) {
  return request({
    url: '/attraction/auth/edit',
    method: 'put',
    data,
  })
}

/**
 * 展示所有的景点
 * @param {用户信息} data
 * @returns
 */
export function list(params) {
  return request({
    url: '/attraction/unAuth/list',
    method: 'get',
    params,
  })
}
