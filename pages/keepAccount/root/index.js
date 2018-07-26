const $ = require('../../../common/service.js');
var app = getApp()
Page({
  data: {
    page:1,
    top:40,
    list:[{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1,id:0},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1}]
  },
  onLoad:function (option) {
    this.gettime()
    this.navGo=$.navGo;
  },
  onShow:function(option){

  },
  lower:function(e){
    console.log(1)
  },
  gettime:function(){
    var time = new Date();
    const dstart=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1) + '-' + $.addzero(time.getDate());
    const ntime=$.addzero(time.getHours())+':'+$.addzero(time.getMinutes());
  }
})
