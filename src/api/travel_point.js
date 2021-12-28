import request from '@/utils/request'

/**
 * 添加结点，没有行程id则会创建一个行程，返回行程id
 * @param {结点信息} data
 * @returns
 */
export function add(data) {
  return request({
    url: '/travel-point/auth/add',
    method: 'post',
    data,
  })
}

/**
 * 删除结点
 * @param {结点信息} datat
 * @returns
 */
export function deletes(data) {
  return request({
    url: '/travel-point/auth/delete',
    method: 'delete',
    data,
  })
}

/**
 * 修改结点
 * @param {结点信息} data
 * @returns
 */
export function edit(data) {
  return request({
    url: '/travel-point/auth/edit',
    method: 'put',
    data,
  })
}

/**
 * 根据查询得到的travelplan,如果要一个行程，建议使用traveplan的api
 * @param {用户信息} params
 * @returns
 */
export function travelPointslist(params) {
  return request({
    url: '/travel-point/auth/list',
    method: 'get',
    params,
  })
}
