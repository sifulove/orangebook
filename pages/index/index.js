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
  }

})
