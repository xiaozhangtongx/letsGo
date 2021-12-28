import request from '@/utils/request'

//post method= {post | put}
export function httpAction(url, parameter, method) {
  return request({
    url: url,
    method: method,
    data: parameter,
  })
}

//put
export function putAction(url, parameter) {
  return request({
    url: url,
    method: 'put',
    data: parameter,
  })
}

//post
export function postAction(url, parameter) {
  return request({
    url: url,
    method: 'post',
    data: parameter,
  })
}

//get
export function getAction(url, parameter) {
  return request({
    url: url,
    method: 'get',
    params: parameter,
  })
}
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
 * @param {用户信息} params
 * @returns
 */
export function travelPlanlist(params) {
  return request({
    url: '/travel-plan/auth/list',
    method: 'get',
    params,
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
