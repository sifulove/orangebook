let common={}
const api = {
	HTTP_HOST: 'https://homeroot.cn/',
	//HTTP_HOST: '192.168.1.20:8080/',
	HTTP_SERVER: {
        getUserInfo:'b_getuserinfo'
	}
}
common.host=api.HTTP_HOST;
common.post = function(server, parm) {
	parm = parm || {}
	parm.stoken = wx.getStorageSync('stoken');
	return new Promise(function(success, fail) {
		wx.request({
			url: api.HTTP_HOST + api.HTTP_SERVER[server],
			data: parm,
			method:'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'// 默认值
			},
			success: function(res) {
				success(res.data);
			},
			fail: function(error) {
				wx.showToast({
					title: '网络错误请稍后再试',
					icon: 'none',
					duration: 2000
				})
				fail&&fail(error)
			}
		})
	});
}
module.exports=common
