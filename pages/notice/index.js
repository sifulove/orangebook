const $ = require('../../common/service.js');
const api = require('../../common/api.js');
Page({
  data: {
    list:'',
  },
  onLoad:function (option) {
    this.getData()
  },
  onShow:function(option){

  },
  getData:function(){
    const data={service:'getLetterList'}
    api.post(data,'B').then(res=>{
       this.setData({list:res})
    })
  },
  navGo:function(e){

  },
  lower:function(){

  }

})
