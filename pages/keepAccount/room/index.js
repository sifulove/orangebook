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
    this.gettime()
  },
  onShow:function(option){

  },
  chooseType:function(e){
    const index=e.detail.value;
    this.setData({index:index})
  },
  switch1Change:function(e){
    this.setData({incomeType:e.detail.value?1:2})
  },
  roomcard:function(){

  },
  gettime:function(){
    var time = new Date();
    const dstart=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1) + '-' + $.addzero(time.getDate());
    const ntime=$.addzero(time.getHours())+':'+$.addzero(time.getMinutes())
    this.setData({time:ntime,date:dstart})
  }
})
