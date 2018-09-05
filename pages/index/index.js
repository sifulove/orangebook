const $ = require('../../common/service.js');
var app = getApp()
Page({
  data: {

  },
  onLoad:function (option) {
    this.navGo=$.navGo;
  },
  onShow:function(option){

  },
  setuserinfo:function(e){
    console.log(e)
  },
  waiting:function(){
    wx.showToast({title:'程序猿正在努力开发中，敬请期待。',icon:'none'})
  }

})
