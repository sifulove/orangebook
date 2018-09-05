
const app=getApp()
Component({
  data:{
    ishow:true,
    text:"小确幸需要您的授权，才能正常使用哦。",
    animationData:{}
  },
  properties: {
     msg:{
       type:Object,
       value:{
         1:1000,//收入
         2:1100,//支出
         3:100  //总计
       }
     }
  },
  ready:function(){
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    })
    this.animation = animation
  },
  methods: {
    close:function(){
       const data=this.data.ishow?'-500rpx':'0';
       this.data.ishow=!this.data.ishow;
       this.animation.bottom(data).step()
       this.setData({
         animationData:this.animation.export()
       })
       //this.setData({ishow:show})
    }
  }
})
