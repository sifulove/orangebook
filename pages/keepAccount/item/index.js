const $ = require('../../../common/service.js');
var app = getApp()
Page({
  data: {
    type:['基本记账','工资收入','房贷','投资','新建自定义类别'],
    index:0,
    incomeType:1,
    dateSalary:'请选择',
    roomcard:'新建'
  },
  onLoad:function (option) {
  },
  onShow:function(option){

  },
  back:function(){
    wx.navigateBack()
  }
})
