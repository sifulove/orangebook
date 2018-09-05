const $ = require('../../common/service.js');
var app = getApp()
Page({
  data: {
     jiepai:4,
     speed:1
  },
  onLoad:function (option) {
    this.navGo=$.navGo;
    this.setVal=$.setInputval;
    wx.setKeepScreenOn({
    keepScreenOn: true
})
  },
  onShow:function(option){



    //   wx.playBackgroundAudio({
    //     dataUrl: 'http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/116.wav',
    //     title: '',
    //     coverImgUrl: ''
    // })
  //   wx.playBackgroundAudio({
  //     dataUrl: 'http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201808/10427.mp3',
  //     title: '',
  //     coverImgUrl: ''
  // })

  },
  play:function(){
    app.playvoice(this.data.speed,this.data.jiepai)
    //app.time()
    //this.playvoice()
  },
  playvoice1:function(){
    const vioce = wx.createInnerAudioContext()
    let index=0,speed=1000/this.data.speed,pai=this.data.jiepai;

    setInterval(function(){
      console.log(index)
      if(index%pai==0){
        vioce.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/106.wav'
      }else{
        vioce.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/116.wav'
      }
      vioce.play()
      index++

    },speed)
  },
  playvoice:function(speed,jiepai){
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    let index=0,s=1000/speed,pai=jiepai;

    setInterval(function(){
      console.log(index)
      if(index%pai==0){
        backgroundAudioManager.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/106.wav'
      }else if(index%pai==1){
        backgroundAudioManager.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/116.wav'
      }else{
        backgroundAudioManager.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/106.wav'
        backgroundAudioManager.src='http://fjdx.sc.chinaz.com/files/download/sound/huang/cd4/wav/b4/116.wav'
      }
      index++

    },s)
  },
  bindButtonTap: function() {
		var that = this
		wx.chooseVideo({
			sourceType: ['album','camera'],
			maxDuration: 60,
      camera: 'back',
			success: function(res) {
				that.setData({
					src: res.tempFilePath
				})
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            console.log(res.errMsg)
          }
        })
			}
		})
	}

})
