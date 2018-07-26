const $ = require('../../../common/service.js');
var app = getApp()
Page({
  data: {
    current:0,
    list1:[{}],
    list2:[]
  },
  onLoad:function (option) {

  },
  onShow:function(option){

  },
  //下拉触底加载
  downrefresh:function(){

  },
  tabchange:function(e){
    this.setData({current:e.currentTarget.dataset.id})
  },
  hurryup:function(e){

  },
  return:function (e) {
    wx.navigateTo({
      url:'/pages/lendMoney/return/index'
    })
  }

})
