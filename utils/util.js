// toast提示
const toast = function(title){
  wx.showToast({
    title: title
  })
}
//showModal确认框
const showModal = function(title,content,callBack){
  wx.showModal({
    title: title,
    content: content,
    success(res) {
      if (res.confirm) {
        callBack()
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}
//loading加载
const loading = function (title){
  wx.showLoading({
    title: title
  })
}
// navigateTo页面路由跳转
const navigate = function(url){
  wx.navigateTo({
    url: url,
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}
// 跳转到tab页
const switchTab = function (url){
  wx.switchTab({
    url: url
  })
}
export default{
  toast,
  showModal,
  loading,
  navigate,
  switchTab
}