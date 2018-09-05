const $ = require('../../../common/service.js');
const api=require('../../../common/api.js');
var app = getApp()
Page({
  data: {
    checked:true,
    repaymentAmount:0
  },
  onLoad:function (option) {
    this.setVal=$.setInputval;
    this.setData({info:option,repaymentAmount:option.amount.split('.')[0]})
  },
  // radioChange:function(e){
  //   const val=e.detail.value;
  // },
  repay:function(){
    const data={service:'repayment',borrowId:this.data.info.id,repaymentAmount:this.data.repaymentAmount}
    api.post(data,'B').then(res=>{

    })
  }
})
