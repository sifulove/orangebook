const $ = require('../../../common/service.js');
const api = require('../../../common/api.js');
const appData = getApp().globalData;
Page({
  data: {
    user:{
      name:'--',
      img:''
    },
    lentMsg:false,
    loanList:[]
  },
  onLoad:function (options) {
    if(options){
      this.setData({lentMsg:true})
    }
    this.getuserinfo()
  },
  onShow:function(option){

  },
  getuserinfo:function (){

    const data={
      service:'getUserInfo'
    }
    api.post(data,'B').then(res=>{
      const userData={
        name:res.userInfo.nick_name,
        img:res.userInfo.header_img,
        loanList:res.loanList,
        score:res.userInfo.score
      }
      this.setData({user:userData})
    }).catch(err=>{

    })
  },
  submit:function(){
    console.log(1)
  }
})
