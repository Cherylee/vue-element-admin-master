import request from '@/utils/request'
// 测试方法
export function test() {
    return request({
      url: '/test',
      method: 'post'
    })
  }