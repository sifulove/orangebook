const $ = require('../../../common/service.js');
const api = require('../../../common/api.js');
var app = getApp()
Page({
  data: {
    current:0,
    list1:[],
    list2:[]
  },
  onLoad:function (option) {
    this.getInfo(1)
    this.getInfo(2)
  },
  onShow:function(option){

  },
  getInfo:function(type){
    const data={service:'borrowingLogs',type:type}
    api.post(data,'B').then(res=>{
      if(type==1){
        this.setData({list1:res})
      }else{
        this.setData({list2:res})
      }
    })
  },
  //下拉触底加载
  downrefresh:function(){

  },
  tabchange:function(e){
    this.setData({current:e.currentTarget.dataset.id})
  },
  hurryup:function(e){
     if(e.currentTarget.dataset.status!=5){
      const data={service:'urge',borrowingId:e.currentTarget.dataset.id}
      api.post(data,'B').then(res=>{

      })
     }else{
       wx.showToast({title:'账单未超期，超期后方可发送短信提醒',icon:'none'})
     }
  },
  return:function (e) {
    wx.navigateTo({
      url:'/pages/lendMoney/return/index?id='+e.currentTarget.dataset.id+'&amount='+e.currentTarget.dataset.amount+'&name='+e.currentTarget.dataset.name
    })
  }

})
