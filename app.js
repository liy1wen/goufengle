//app.js
import utils from './utils/util.js' //引入工具函数
import request from './api/request'
App({
  onLaunch: function () {

  },
  globalData: {
    userInfo: null,
  },
  utils,
  lbsKey: '28a5d60a47de2203c43843f37b628eb3',//高德地图key
  request
})