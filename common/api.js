let common={}
const api = {
	U:'https://u.homeroot.cn/device/api/index',
	B:'https://book.homeroot.cn/api/api/index',
	HTTP_VERSION:'1.0.0'
}
common.host=api.HTTP_HOST;
common.loginPost = function(parm) {
	parm.version=api.HTTP_VERSION;
	return new Promise(function(success, fail) {
		wx.request({
			url: api.U,
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
common.post = function(parm,type) {
	parm = parm || {};
	parm.version=api.HTTP_VERSION;
	parm.stoken=parm.stoken?parm.stoken:wx.getStorageSync('stoken');
	return new Promise(function(success, fail) {
		wx.request({
			url: api[type],
			data: parm,
			method:'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'// 默认值
			},
			success: function(res) {
				if(res.data.code==0){
					success(res.data.data);
				}else{
					console.log(res)
					wx.showToast({
						title: '网络错误请稍后再试',
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(error) {
				console.log(error)
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
