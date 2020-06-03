// toast提示
const toast = title => {
  wx.showToast({
    title: title
  })
}
//showModal确认框
const showModal = (title, content, callBack) => {
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
const showLoading = title => {
  wx.showLoading({
    title: title,
    mask: true
  })
}
//隐藏loading加载
const hideLoading = () => {
  wx.hideLoading()
}
// navigateTo页面路由跳转
const navigate = url => {
  wx.navigateTo({
    url: url,
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}
// 跳转到tab页
const switchTab = url => {
  wx.switchTab({
    url: url
  })
}
export default {
  toast,
  showModal,
  showLoading,
  navigate,
  switchTab,
  hideLoading
}