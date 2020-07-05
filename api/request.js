import baseUrl from './configUrl'
import nativeApi from '../utils/nativeApi.js'
/*
  path:请求路径
  method：请求方法
  params：请求参数
*/
let header;
let num = 0;
const closeLoading = ()=> {
  num --;
  if (num == 0) nativeApi.hideLoading()
}
export default function request(path,method,params){
 
  if(method.toUpperCase() == "POST") {
    header["content-type"] = "application/x-www-form-urlencoded"
  }
  return new Promise((reslove,reject)=>{
    if (num == 0) nativeApi.showLoading('加载中') 
    num ++;
    wx.request({
      url: baseUrl + path,
      method: method || 'get',
      data: params || {},
      header: {
        'Authorization': 'Bearer ' + wx.getStorageSync('token'),
        ...header
      },
      success (res) {
        reslove(res.data)
        closeLoading()
      },
      fail(err){
       reject(err)
       closeLoading()
      }
    })
  })
}