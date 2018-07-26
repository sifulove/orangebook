const $ = require('../../../common/service.js');
var app = getApp()
Page({
  data: {

  },
  onLoad:function (option) {
    this.setVal=$.setInputval;
    this.gettime()
  },
  onShow:function(option){

  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '借账申请函',
      path: '/page/user?money='+this.data.money+'&tel='+tel+'&name='+name+'&date='+date+'&card='+card
    }
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  gettime:function(){
    var time = new Date();
    const dstart=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1) + '-' + $.addzero(time.getDate());
    this.setData({start:dstart,date:dstart})
  },
  bindDateChange: function(e) {
    const val=e.detail.value;
    this.setData({
      date: val
    })
  }
})
