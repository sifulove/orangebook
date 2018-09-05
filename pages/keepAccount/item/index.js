const $ = require('../../../common/service.js');
const api=require('../../../common/api.js');
Page({
  data: {
    type:['基本记账','工资收入','房贷','投资','新建自定义类别'],
    index:0,
    incomeType:1,
    dateSalary:'请选择',
    roomcard:'新建'
  },
  onLoad:function (option) {
    this.getData()
  },
  onShow:function(option){

  },
  getData:function(){
    const data={service:'getBillInfo',bookId:this.options.id}
    api.post(data,'B').then(res=>{
      this.setData({info:res})
    })
  },
  back:function(){
    wx.navigateBack()
  }
})
