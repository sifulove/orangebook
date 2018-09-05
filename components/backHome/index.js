Component({
  methods: {
    backHome:function(){
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }
  }
})
