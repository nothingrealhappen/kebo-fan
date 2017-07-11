//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    isActive: false
  },
  //事件处理函数
  toggleSwitch: function() {
    this.setData({ isActive: !this.data.isActive });
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
