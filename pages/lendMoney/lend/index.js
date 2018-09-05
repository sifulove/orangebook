const $ = require('../../../common/service.js');
const api=require('../../../common/api.js');
var app = getApp()
Page({
  data: {
    ishow:false
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
      this.setData({ishow:false})
      const stoken=wx.getStorageSync('stoken');
      return {
        title: '借账申请函',
        path: '/pages/usercenter/userMain/index?loanAmount='+this.data.loanAmount+'&tel='+this.data.tel+'&name='+this.data.name+'&date='+this.data.date+'&card='+this.data.card+'&borrowId='+this.data.borrowId+'&id='+stoken
      }
    }
  },
  submit:function(){
    const data={
      service:'borrowing',
      loanAmount:this.data.loanAmount,
      borrowerName:this.data.name,
      borrowerMobile:this.data.tel,
      borrowerNric:this.data.card,
      repaymentTime:this.data.date
    }
    const check=this.ckeckMsg(data)
    if(check){
      wx.showToast({title:check,icon:'none'})
      return false;
    }
    api.post(data,'B').then(res=>{
      this.setData({ishow:true})
      this.data.borrowId=res.borrowId
    })
  },
  gettime:function(){
    var time=Date.parse(new Date())+24*60*60*1000;
    time=new Date(time)
    const dstart=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1) + '-' + $.addzero(time.getDate());
    this.setData({start:dstart,date:dstart})
  },
  bindDateChange: function(e) {
    const val=e.detail.value;
    this.setData({
      date: val
    })
  },
  hide:function(){
    this.setData({ishow:false})
  },
  ckeckMsg:function(data){
    if(!data.loanAmount){
      return '请填写借款金额';
    }else if(!data.borrowerMobile||!/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(data.borrowerMobile)){
      return '请填写正确手机号码'
    }else if(!data.borrowerName){
      return '请填写借款人姓名';
    }else if(!data.borrowerNric){
      return '请填写正确身份证号'
    }else if(!data.repaymentTime){
      return '请选择还款时间'
    }else{
      return false;
    }

  }
})
