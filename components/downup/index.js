
const app=getApp()
Component({
  data:{
    ishow:true,
    animationData:{}
  },
  properties: {
     msg:{
       type:Object,
       value:{
         income:1000,//收入
         expenditure:1100,//支出
         leftover:100  //总计
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
