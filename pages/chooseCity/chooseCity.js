// pages/chooseCity/chooseCity.js
const app = getApp();
const event = app.globalData.eventBus
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchCity: '',//搜索城市名称
    citys: ['北京','上海','广州','深圳','成都','武汉','杭州','西安','南京','苏州','重庆'],//热门城市
    indexList: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    city: '',//定位所在城市
    cityList: ["天津","郑州","东莞"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ city: wx.getStorageSync('city') })
  },
  chooseCity(e) {
    // console.log(e.currentTarget.dataset.city)
    wx.setStorageSync('city', e.currentTarget.dataset.city)
    event.emit('sendCityName',e.currentTarget.dataset.city)
    app.nativeApi.navigateBack()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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