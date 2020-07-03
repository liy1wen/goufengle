// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
    activityList: [{src:'https://m.360buyimg.com/babel/s1171x462_jfs/t1/133024/23/751/113948/5ed0e419Ea568a792/4875eb4693c16c78.jpg!q50.jpg',des:'有关于色彩没学，让罗云熙告诉你',status:0},{src:'https://m.360buyimg.com/babel/s1171x462_jfs/t1/120333/22/3178/142968/5ece205cEe71c5ddc/17492270b6f3a831.jpg!q50.jpg',des:'如此温暖的"城市猎人"，是你最为完美的治愈系',status:1},{src:'https://m.360buyimg.com/babel/s1171x462_jfs/t1/125379/22/3219/105492/5ecf8a24E38dba47c/8cf608da8d09e431.jpg!q50.jpg',des:'有关于色彩没学，让罗云熙告诉你',status:2}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ city: JSON.parse(wx.getStorageSync('city')) })
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