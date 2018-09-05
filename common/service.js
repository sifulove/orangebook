const $={}
const api=require('api.js')
$.navGo=function(e){
    wx.navigateTo({url:e.currentTarget.dataset.url})
},
$.setInputval=function(e){
    const key=e.currentTarget.dataset.key.split('.');
    let target=this.data;
    switch (key.length) {
      case 1:
        target[key[0]]=e.detail.value
        break;
      case 2:
        target[key[0]][key[1]]=e.detail.value
        break
      case 3:target[key[0]][key[1]][key[2]]=e.detail.value
      default:
    }
},
$.login=function(fn){
  wx.login({
    success: function success(res) {
      const code=res.code
      api.loginPost({service:'permit',code:code}).then(function (res) {
        const skey=res.data.sessKey;
        if (res.code == 0) {
          wx.getUserInfo({
            withCredentials: true,
            success: function success(res) {
              const config = {
                service:'smallLogin',
                skey: skey,
                data: res.encryptedData,
                iv: res.iv
              };
              api.loginPost(config).then(function (res) {
                if (res.code == 0) {
                   api.post({service:'getInfo',stoken:res.data.stoken},'U').then(res=>{

                   })
                   fn&&fn(res.data)
                }
              }).catch(function (err) {
                console.log(err)
              });
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  })
}
//根据开始结束时间获取使用时长
$.getTime=function (a,b) {
          var otime = new Date(a.replace(/\-/g, '/'));
          var ntime=b;
          var time=otime-ntime;
          var d = Math.floor( time / 86400000 );
          var h =  Math.floor( time % 86400000 / 3600000 );
          var m = Math.floor( time % 86400000 % 3600000 / 60000 );
          var s = Math.floor(time % 86400000 % 3600000 %60000/1000);
          return {
            d:d,
            h:h,
            m:m,
            s:s
          }
 }
/** 获取url后面的参数1*/
$.getUrl=function(str,key){
  var url = str;
      url = url.split('?')[1];
    //  url= url.replace(/^http[^\?]+\?/,'&')
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  var r = url.substr(1).match(reg);
  var val=r?r[2]:null;
  return val;
}
$.strspace=function(str,n){
  var Newstr='';
  if(!str){return '- -';}
  for(var i=0;i<str.length-1;i++){
    Newstr+=str.substring(i,i+1)
    if((i+1)%n==0){
      Newstr+=' ';
    }
  }
  Newstr+=str.substring(str.length-1,str.length);
  return Newstr;
}
$.addzero=function(data){
    return data<10?'0'+data:data;
  }
$.setBottom=function (name,objname,h,num,key){
  wx.createSelectorQuery().select(objname).boundingClientRect(function(rect){
    rect.bottom  // 节点的下边界坐标
  }).exec(function(a){
    wx.getSystemInfo({
      success:function(res){
        var k=Math.round(res.windowWidth/375*h);
        var rnum=res.windowWidth/375*num;
        var mh=res.windowHeight-k-a[0].bottom;
        if(mh<rnum){  mh=Math.round(rnum);  }
        name.setData({[key]:'margin-top:'+mh+'px;'})
      }
    })
  })

}
$.getSystemInfo=function (){
  var w,h;
  wx.getSystemInfo({
    success:function(res){
      w=res.windowWidth;
      h=res.windowHeight;
    }
  })
  return {width:w,height:h}
}
module.exports= $
