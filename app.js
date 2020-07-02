//app.js
import util from './utils/util.js'
import nativeApi from './utils/nativeApi.js' //引入工具函数
import request from './api/request'
var eventBus = require('./utils/eventBus')
App({
  onLaunch: function () {

  },           
  globalData: {
    userInfo: null,
    eventBus: eventBus.eventBus
  },
  nativeApi,
  lbsKey: '28a5d60a47de2203c43843f37b628eb3',//高德地图key
  request,
  util
})