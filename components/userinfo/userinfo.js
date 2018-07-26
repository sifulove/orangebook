
const app=getApp()
Component({
  data:{
    ishow:false,
    text:"小确幸需要您的授权，才能正常使用哦。"
  },
  properties: {

  },
  ready:function(){
     const that=this;
     if (!wx.getStorageSync("stoken")){
       // wx.getSetting({
       //   success(res) {
       //      that.setData({ishow:res.authSetting['scope.userInfo']?false:true})
       //      if(res.authSetting['scope.userInfo']){
       //        that.setData({ishow:false})
       //        that.triggerEvent('setinfo')
       //      }else{
       //        that.setData({ishow:true})
       //      }
       //   }
       // })
       /*临时更优解*/
       wx.getUserInfo({
         success: function (res) {
           that.setData({ishow:false})
         },
         fail:function(err){
           that.setData({ishow:true})
         }
       })
     }else{
       that.setData({ishow:false})
       //that.triggerEvent('setinfo')
     }
  },
  methods: {
    getUserInfo:function(e){
      if(e.detail.errMsg=="getUserInfo:ok"){
        this.setData({ishow:false})
        var data = {id:111111} // detail对象，提供给事件监听函数
        this.triggerEvent('setinfo', data)
      }else{
        const self=this;
        this.setData({text:'很遗憾，因为授权失败，您将无法正常使用小程序。请到设置里（右上角 - 关于 - 右上角 - 设置）重新授权。'})
        setTimeout(function(){
          self.setData({ishow:false})
        },3000)
      }
    }
  }
})
