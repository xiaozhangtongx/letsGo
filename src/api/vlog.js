import request from '@/utils/request'

/*--------------------------------------------------------游记收藏--------------------------------------------------------*/
/**
 * 收藏游记
 * @param {游记信息} data
 * @returns
 */
export function add(data) {
  return request({
    url: '/vlog-collection/auth/add',
    method: 'post',
    data,
  })
}

/**
 * 取消收藏游记
 * @param {游记信息} datat
 * @returns
 */
export function deletes(data) {
  return request({
    url: '/vlog-collection/auth/delete',
    method: 'delete',
    data,
  })
}

/**
 * 搜藏游记列表
 * @param {游记信息} planId
 * @returns
 */
export function list(data) {
  return request({
    url: '/vlog-collection/auth/list',
    method: 'get',
    data,
  })
}

/*--------------------------------------------------------个人游记管理--------------------------------------------------------*/
/**
 * 发布游记
 * @param {游记信息} data
 * @returns
 */
export function add(data) {
  return request({
    url: '/vlog/auth/add',
    method: 'post',
    data,
  })
}

/**
 * 删除游记
 * @param {游记信息} datat
 * @returns
 */
export function deletes(data) {
  return request({
    url: '/vlog/auth/delete',
    method: 'delete',
    data,
  })
}

/**
 * 修改游记
 * @param {游记信息} data
 * @returns
 */
export function edit(data) {
  return request({
    url: '/vlog/auth/edit',
    method: 'put',
    data,
  })
}

/**
 * 查询一个游记的信息
 * @param {游记id} planId
 * @returns
 */
export function getById(planId) {
  return request({
    url: '/vlog/auth/getById',
    method: 'get',
    planId,
  })
}

/**
 * vlog条件查询
 * @param {游记信息} data
 * @returns
 */
export function list(data) {
  return request({
    url: '/vlog/auth/list',
    method: 'get',
    data,
  })
}

/**
 * vlog搜索框查询
 * @param {游记信息} data
 * @returns
 */
export function searchList(data) {
  return request({
    url: '/vlog/auth/searchList',
    method: 'get',
    data,
  })
}
