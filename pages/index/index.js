//index.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: ['https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92409/39/13306/47742/5e54fc8dE179d82d5/2ea013718c8205f1.jpg!cr_1125x445_0_171!q70.jpg.dpg',
'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/118830/27/8052/83693/5ec8f916E3149ed72/d46876b465d99210.jpg!cr_1125x445_0_171!q70.jpg.dpg',
'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/121285/38/3130/150368/5eccf3d1E79062c03/28810b9793a5afc3.jpg!cr_1125x445_0_171!q70.jpg.dpg'
    ],
    value: '',//搜索关键词
    city: '',//所在城市
    gridList: [{title:'奢品维修',icon: 'icon-weixiu'},{title:'奢品保养',icon: 'icon-baoyang'},{title:'奢品回收',icon: 'icon-huishou'},{title:'奢品清洗',icon: 'icon-qingxifuwu'}],
    stepGrid: [{title:'选择类别',icon: 'icon-classify-on'},{title:'拍摄细节',icon: 'icon-xiangji'},{title:'提交鉴定',icon: 'icon-jianding'}]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation()
    this.getArticleTitle()
  },
  //获取用户位置（经纬度）
  getLocation() {
    let that = this;
    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success (res) {
        that.getCity(res.latitude,res.longitude)
        that.getArticleTitle()
      }
     })
  },
  //获取所在城市
  getCity(latitude,longitude) {
    let that = this;
    wx.request({
      url: `https://restapi.amap.com/v3/geocode/regeo?key=${app.lbsKey}&location=${longitude},${latitude}`,
      success (res) {
        that.setData({
          city: res.data.regeocode.addressComponent.city.replace('市','')
        })
      }
    })
  },
  //跳转选择城市
  chooseCity() {
    app.utils.navigate('../chooseCity/chooseCity')
  },
  getArticleTitle() {
    app.request('getArticleTitle').then(res=>{
      console.log(res.data,'+++')
    }).catch(err=>{
      console.log(err)
    })
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'购疯了'
    }
  }
})