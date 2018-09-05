
const app=getApp()
Component({
  data:{
    ishow:true,
    text:"小确幸需要您的授权，才能正常使用哦。",
    animationData:{}
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
     msg:{
       type:Object,
       value:{}
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
       const data1=this.data.ishow?'-30px':'0';
       this.data.ishow=!this.data.ishow;
       this.animation.bottom(data).step()
       this.setData({
         animationData:this.animation.export()
       })
       //this.setData({ishow:show})
    }
  }
})
