import request from '@/utils/request'

/**
 * 添加行程
 * @param {行程信息} data
 * @returns
 */
export function add(data) {
  return request({
    url: '/travel-plan/auth/add',
    method: 'post',
    data,
  })
}

/**
 * 删除行程
 * @param {行程信息} datat
 * @returns
 */
export function deletes(data) {
  return request({
    url: '/travel-plan/auth/delete',
    method: 'delete',
    data,
  })
}

/**
 * 修改行程
 * @param {行程信息} data
 * @returns
 */
export function edit(data) {
  return request({
    url: '/travel-plan/auth/edit',
    method: 'put',
    data,
  })
}

/**
 * 查询一个行程的信息
 * @param {行程id} planId
 * @returns
 */
export function getByPlanId(planId) {
  return request({
    url: '/travel-plan/auth/getByPlanId',
    method: 'get',
    planId,
  })
}

/**
 * 展示所有的行程
 * @param {用户信息} data
 * @returns
 */
export function list(data) {
  return request({
    url: '/travel-plan/auth/list',
    method: 'get',
    data,
  })
}

/**
 * 保存，完成点击提交
 * @param {行程信息} data
 * @returns
 */
export function save(data) {
  return request({
    url: '/travel-plan/auth/save',
    method: 'put',
    data,
  })
}


