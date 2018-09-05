Component({
  data:{
    ishow:false
  },
  properties: {

  },
  ready:function(){
     const that=this;
  },
  methods: {
   cancel:function(){
     this.triggerEvent('hide')
   }
  }
})
