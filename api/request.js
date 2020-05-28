import baseUrl from './configUrl'
/*
  path:请求路径
  method：请求方法
  params：请求参数
*/
export default function request(path,method,params){
  return new Promise((reslove,reject)=>{
    wx.request({
      url: baseUrl + path,
      method: method || 'get',
      data: params || {},
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + wx.getStorageSync('token')
      },
      success (res) {
        reslove(res)
      },
      fail(err){
       reject(err)
      }
    })
  })
}