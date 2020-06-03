/**
 * 获取当前日期 yyyy-mm-dd
 */
const getDate = () =>{
  let time = new Date();
  let y = new Date().getFullYear();
  let m = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
  let d = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  return y + '-' + m + '-' + d;
}
/**
 * 获取url后面参数
 */
const getParamByName = (name, url)=> {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' ').replace('#', ''));
}
/**
 * 正则匹配电话号码
 */
const regMobile = (mobile, msg) => {
  if (!(/^1[345789]\d{9}$/.test(mobile))) {
    this.toast.create({ message: msg, duration: 1000 }).present();
    return false;
  }
}
/**
 * 根据出生日期计算年龄
 */
const getAge =  strAge=> {
  if (!strAge) return '-'
  var birArr = strAge.split("-");
  var birYear = birArr[0];
  var birMonth = birArr[1];
  var birDay = birArr[2];
  d = new Date();
  var nowYear = d.getFullYear();
  var nowMonth = d.getMonth() + 1; //记得加1
  var nowDay = d.getDate();
  var returnAge;
  if (birArr == null) {
    return false
  }
  var d = new Date(birYear, birMonth - 1, birDay);
  if (d.getFullYear() == birYear && (d.getMonth() + 1) == birMonth && d.getDate() == birDay) {
    if (nowYear == birYear) {
      returnAge = 0; // 
    } else {
      var ageDiff = nowYear - birYear; // 
      if (ageDiff > 0) {
        if (nowMonth == birMonth) {
          var dayDiff = nowDay - birDay; // 
          if (dayDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        } else {
          var monthDiff = nowMonth - birMonth; // 
          if (monthDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        }
      } else {
        return "出生日期晚于今天，数据有误"; //返回-1 表示出生日期输入错误 晚于今天
      }
    }
    return returnAge;
  } else {
    return ("输入的日期格式错误！");
  }
}
/**
 * 时间戳转换成标准时间
 */

const timeStampTurnTime =  timeStamp => {
  if (timeStamp > 0) {
    var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  } else {
    return "";
  }
}

export default {
  getDate,
  getParamByName,
  regMobile,
  getAge,
  timeStampTurnTime
}