const $ = require('../../../common/service.js');
const api=require('../../../common/api.js');
Page({
  data: {
    page:1,
    top:40,
    size:20,
    fresh:true,
    list1:[{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1,id:0},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1},{money:1000,time:'2018-9-9 10:29',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:2},{money:1000,time:'2018-9-9 10:19',classify:'交通',type:1}]
  },
  onLoad:function (option) {
    this.navGo=$.navGo;
    this.getList()
    this.getCount();
  },
  onShow:function(option){

  },
  getList:function(){
    this.data.fresh=false;
    const data={service:'getBillList',page:this.data.page,size:this.data.size,typeId:1}
    api.post(data,'B').then(res=>{
      const list=this.data.list?this.data.list.concat(res):res;
      this.setData({list:list})
      this.data.fresh=true;
    }).catch(err=>{
      this.data.fresh=true;
    })
  },
  getCount:function(){
    const data={service:'count'}
    api.post(data,'B').then(res=>{
      this.setData({count:res})
    })
  },
  lower:function(e){
    if(this.data.fresh){
      this.data.page++
      this.getList()
    }
  },
  gettime:function(){
    var time = new Date();
    const date=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1);
    return date;
  },
  getPreDate:function(){
    var time = new Date(this.data.date);
    time.setMonth(time.getMonth()-1);
    const date=time.getYear() + 1900 + '-' + $.addzero(time.getMonth() + 1);
    this.data.date=date;
  }
})
