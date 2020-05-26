//index.js
//获取应用实例
const app = getApp();
import utils from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [   'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92409/39/13306/47742/5e54fc8dE179d82d5/2ea013718c8205f1.jpg!cr_1125x445_0_171!q70.jpg.dpg',
'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/118830/27/8052/83693/5ec8f916E3149ed72/d46876b465d99210.jpg!cr_1125x445_0_171!q70.jpg.dpg',
'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/121285/38/3130/150368/5eccf3d1E79062c03/28810b9793a5afc3.jpg!cr_1125x445_0_171!q70.jpg.dpg'
    ]
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
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  goDetials:function(){
    if (!app.globalData.userInfo){
      utils.showModal('登录提醒', '您还未登陆，请先登录',()=>{
        utils.navigate('../login/login')
      })
    }else{
      utils.toast('hello world')
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'购疯了'
    }
  }
})