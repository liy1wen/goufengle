// pages/my/my.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head_img:'',
    isLogin: false,
    username: '登录 / 注册'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  goLogin(){
    app.nativeApi.navigate('../login/login')
    // wx.navigateTo({
    //   url: '../login/login',
    // })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(wx.getStorageSync('userInfo').avatarUrl,'+++')
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        isLogin: true,
        username: wx.getStorageSync('userInfo').nickName
      })
    }
    // console.log(app.globalData.userInfo)
    this.setData({
      head_img: wx.getStorageSync('userInfo').avatarUrl || '../../assets/images/avatarUrl.png'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})