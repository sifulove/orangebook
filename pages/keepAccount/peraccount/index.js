const $ = require('../../../common/service.js');
const api = require('../../../common/api.js');
var app = getApp()
Page({
  data: {
    type:[{name:'基本记账',id:1},{name:'工资收入',id:2},{name:'房贷',id:3},{name:'投资',id:4},{name:'新建自定义类别',id:5}],
    index:0,
    incomeType:1,
    itemchoose:0,
    items3:[{src:'../../../image/yiban.jpg',name:'一般',pid:1,id:6},{src:'../../../image/food.png',name:'饮食',pid:1,id:7},{src:'../../../image/fangzhu.png',name:'房租',pid:1,id:8},{src:'../../../image/doctor.png',name:'医疗',pid:1,id:9},{src:'../../../image/gift.png',name:'人情',pid:1,id:10},{src:'../../../image/huafei.jpg',name:'话费',pid:1,id:11},{src:'../../../image/jiadian.png',name:'家电',pid:1,id:12},{src:'../../../image/learn.png',name:'学习',pid:1,id:13},{src:'../../../image/liren.png',name:'美容',pid:1,id:14},{src:'../../../image/tranfic.png',name:'交通',pid:1,id:15},{src:'../../../image/water.png',name:'水电煤',pid:1,id:16},{src:'../../../image/web.jpg',name:'网费',pid:1,id:17},{src:'../../../image/weixiu.png',name:'维修',pid:1,id:18},{src:'../../../image/yifu.png',name:'服装',pid:1,id:19},{src:'../../../image/yule.png',name:'娱乐',pid:1,id:20}],
    items4:[{src:'../../../image/yiban.jpg',name:'一般'},{src:'../../../image/cunkuan.png',name:'存款'},{src:'../../../image/fangzhu.png',name:'房租'},{src:'../../../image/job.png',name:'工资'},{src:'../../../image/licai.png',name:'理财'},{src:'../../../image/jianqian.png',name:'捡钱'}],
    dateSalary:'请选择',
    roomcard:'新建'
  },
  onLoad:function (option) {
    this.gettime()
    this.navGo=$.navGo;
    this.setVal=$.setInputval;
    this.getType()
  },
  onShow:function(option){

  },
  createLog:function(){
    const data={service:'recording',typePid:1,typeId:this.data.incomeType==1?this.data.items1[this.data.itemchoose].id:this.data.items2[this.data.itemchoose].id,amount:this.data.amount,bookAt:this.data.date,remarks:this.data.remarks}
    api.post(data,'B').then(res=>{
       wx.showToast({title:'记账成功',icon:'success'})
    })
  },
  getList:function(date){
    const data={service:'getBillList',page:1,size:5,typeId:1}
    api.post(data,'B').then(res=>{
      this.setData({bill:res})
    })
  },
  getType:function(){
    const data={service:'getBookType',typeId:5}
    api.post(data,'B').then(res=>{
      this.setData({items1:res})
    })
    data.typeId=6;
    api.post(data,'B').then(res=>{
       this.setData({items2:res})
    })
  },
  itemchoose:function(e){
    console.log(e)
    this.setData({itemchoose:e.currentTarget.dataset.index})
  },
  chooseType:function(e){
    const index=e.detail.value;
    this.setData({index:index})
  },
  switch1Change:function(e){
    this.setData({incomeType:e.detail.value?1:2,itemchoose:0})
  },
  roomcard:function(){

  },
  gettime:function(){
    var time = new Date();
    const dstart=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1) + '-' + $.addzero(time.getDate());
    const billDate=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1);
    const ntime=$.addzero(time.getHours())+':'+$.addzero(time.getMinutes())
    this.setData({time:ntime,date:dstart})
    this.getList(billDate)
  },
  bindDateChange: function(e) {
    const val=e.detail.value;
    this.setData({
      date: val
    })
  },
  bindTimeChange:function(e) {
    const val=e.detail.value;
    this.setData({
      time: val
    })
  }
})
