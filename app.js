const service = require('common/service.js');
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const info=service.getSystemInfo();
    this.globalData.screeninfo=info;
    service.login(function(data){
      console.log(data)
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    wx.setTabBarBadge({
      index: 2,
      text: '1'
    })
  },
  globalData: {

  }
})
