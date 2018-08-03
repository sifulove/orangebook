
const app=getApp()
Component({
  data:{
    ishow:true,
    text:"小确幸需要您的授权，才能正常使用哦。",
    animationData:{},
    closeData:{}
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
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
      duration: 500,
      timingFunction: 'ease',
    })
    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.animation1 = animation1
  },
  methods: {
    close:function(){
       const data=this.data.ishow?'-500rpx':'0';
       const data1=this.data.ishow?'-30px':'0';
       this.data.ishow=!this.data.ishow;
       this.animation.bottom(data).step()
       this.animation1.top(data1).step()
       this.setData({
         animationData:this.animation.export(),
         closeData:this.animation1.export()
       })
       //this.setData({ishow:show})
    }
  }
})
