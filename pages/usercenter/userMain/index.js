const $ = require('../../../common/service.js');
const api = require('../../../common/api.js');
const appData = getApp().globalData;
Page({
  data: {
    user:{
      name:'--',
      img:''
    },
    onoff:false,
    loanList:[]
  },
  onLoad:function (options) {
    if(options.id){
      this.setData({onoff:true,msg:options})
    }
    this.getuserinfo()
  },
  onShow:function(option){

  },
  getuserinfo:function (){
    const data={
      service:'getUserInfo',
      stoken:this.options.id
    }
    api.post(data,'B').then(res=>{
      const userData={
        name:res.userInfo.nick_name,
        img:res.userInfo.header_img,
        loanList:res.loanList
      }
      this.setData({user:userData})
    })
  },
  submit:function(){
    const data={
      service:'lending',
      borrowId:this.data.msg.borrowId
    }
    api.post(data,'B').then(res=>{
      wx.showToast({title:'出借成功',icon:'none'})
    })
  },
  setuserinfo:function(e){
    console.log(e)
  }
})
