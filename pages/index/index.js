//index.js
//获取应用实例
const app = getApp();
import utils from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{ src: "../../assets/images/swiper1.jpg" }, { src: "../../assets/images/swiper2.jpg" }, { src: "../../assets/images/swiper3.jpg" }],
    commodityList: [{ des: '花花公子外套春秋男装2020新款韩版潮流工装上衣款韩版潮流工装上衣', imgSrc: '../../assets/images/commodity1.jpg', oldPrice: '￥698', newPrice: '￥269', discount: '3.8折' },
    { des: '花花公子外套春秋男装2020新款韩版潮流工装上衣款韩版潮流工装上衣', imgSrc: '../../assets/images/commodity2.jpg', oldPrice: '￥698', newPrice: '￥269', discount: '3.8折' },
    { des: '花花公子外套春秋男装2020新款韩版潮流工装上衣款韩版潮流工装上衣', imgSrc: '../../assets/images/commodity3.jpg', oldPrice: '￥698', newPrice: '￥269', discount: '3.8折' },
    { des: '花花公子外套春秋男装2020新款韩版潮流工装上衣款韩版潮流工装上衣', imgSrc: '../../assets/images/commodity4.jpg', oldPrice: '￥698', newPrice: '￥269', discount: '3.8折' },
    { des: '花花公子外套春秋男装2020新款韩版潮流工装上衣款韩版潮流工装上衣', imgSrc: '../../assets/images/commodity3.jpg', oldPrice: '￥698', newPrice: '￥269', discount: '3.8折' },
    { des: '花花公子外套春秋男装2020新款韩版潮流工装上衣款韩版潮流工装上衣', imgSrc: '../../assets/images/commodity4.jpg', oldPrice: '￥698', newPrice: '￥269', discount: '3.8折' },
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