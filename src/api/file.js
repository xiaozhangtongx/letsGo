import request from '@/utils/request'

/**
 * 添加文件
 * @param {文件信息} data
 * @returns
 */
export function upload(data) {
  return request({
    url: '/sys-file/upload',
    method: 'post',
    data,
  })
}
