const $ = require('../../../common/service.js');
var app = getApp()
Page({
  data: {
    type:['基本记账','工资收入','房贷','投资','新建自定义类别'],
    index:0,
    incomeType:1,
    itemchoose:0,
    items1:[{src:'../../../image/yiban.jpg',name:'一般'},{src:'../../../image/food.png',name:'饮食'},{src:'../../../image/fangzhu.png',name:'房租'},{src:'../../../image/doctor.png',name:'医疗'},{src:'../../../image/gift.png',name:'人情'},{src:'../../../image/huafei.jpg',name:'话费'},{src:'../../../image/jiadian.png',name:'家电'},{src:'../../../image/learn.png',name:'学习'},{src:'../../../image/liren.png',name:'美容'},{src:'../../../image/tranfic.png',name:'交通'},{src:'../../../image/water.png',name:'水电煤'},{src:'../../../image/web.jpg',name:'网费'},{src:'../../../image/weixiu.png',name:'维修'},{src:'../../../image/yifu.png',name:'服装'},{src:'../../../image/yule.png',name:'娱乐'}],
    items2:[{src:'../../../image/yiban.jpg',name:'一般'},{src:'../../../image/cunkuan.png',name:'存款'},{src:'../../../image/fangzhu.png',name:'房租'},{src:'../../../image/job.png',name:'工资'},{src:'../../../image/licai.png',name:'理财'},{src:'../../../image/jianqian.png',name:'捡钱'}],
    dateSalary:'请选择',
    roomcard:'新建'
  },
  onLoad:function (option) {
    this.gettime()
    this.navGo=$.navGo;
  },
  onShow:function(option){

  },
  itemchoose:function(e){
    console.log(e)
    this.setData({itemchoose:e.currentTarget.dataset.index})
  },
  chooseType:function(e){
    const index=e.detail.value;
    this.setData({index:index})
  },
  switch1Change:function(e){
    this.setData({incomeType:e.detail.value?1:2,itemchoose:0})
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
