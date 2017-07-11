//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Welcome to fan world',
    userInfo: {},
    clickTime: 0
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    this.setData({ clickTime: this.data.clickTime + 1 });
  }
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
})
