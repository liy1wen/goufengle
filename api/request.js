import baseUrl from './configUrl'
import nativeApi from '../utils/nativeApi.js'
/*
  path:请求路径
  method：请求方法
  params：请求参数
*/
let num = 0;
const closeLoading = ()=> {
  num --;
  if (num == 0) nativeApi.hideLoading()
}
export default function request(path,method,params){
  return new Promise((reslove,reject)=>{
    if (num == 0) nativeApi.showLoading('加载中') 
    num ++;
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
        closeLoading()
      },
      fail(err){
       reject(err)
       closeLoading()
      }
    })
  })
}