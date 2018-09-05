const service = require('common/service.js');
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const info=service.getSystemInfo();
    this.globalData.screeninfo=info;
    this.login();
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // wx.setTabBarBadge({
    //   index: 2,
    //   text: '1'
    // })
  },
  login:function(){
    service.login(data=>{
      wx.setStorageSync('stoken', data.stoken);
      this.globalData.user=data;
    })
  },
  time:function() {
    setInterval(function(){
      const time=new Date();
      console.log(time)
    },1000)
  },
  playvoice:function(speed,jiepai){
    const vioce = wx.createInnerAudioContext()
    let index=0;
    let s=1000/speed,pai=jiepai;

    setInterval(function(){
      console.log(new Date())
      if(index%pai==0){
        // wx.playBackgroundAudio({
        //     dataUrl: 'http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/106.wav'
        // })
        vioce.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/106.wav'
      }else{
        // wx.playBackgroundAudio({
        //     dataUrl: 'http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/116.wav'
        // })
        vioce.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/116.wav'
      }

      vioce.play()
      index++

    },s)
  },
  globalData: {

  }
})
