const $ = require('../../../common/service.js');
var app = getApp()
Page({
  data: {
    checked:true
  },
  onLoad:function (option) {

  },
  onShow:function(option){

  },
  radioChange:function(e){
    const val=e.detail.value;
    console.log(val)
  }
})
