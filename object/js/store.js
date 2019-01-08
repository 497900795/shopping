jQuery.ajaxSettings.traditional = true;
var vm = new Vue({
	el:'#app',
	data: {
		keyword:'',
		hot:0,
		nowIndex: 0,
		priceIndex: -1,
		typeIndex: -1,
		buyNum: 1,
		priceArry: [
			'0到20元',
			'20到50元',
			'50到100元',
			'100到200元',
			'200元以上'
		],
		typeArry: [
			'休闲零食',
			'奶品水印',
			'生鲜水果',
			'家清家居',
			'个人护理'
		],
		disData: [
			
		],
	},
	methods : {
		logout() {
			$.ajax({
				url:'/users/logout',
				type:'get',
				success:function() {
					alert('成功登出')
				}
			});
		},
		//发送查询请求,成功则更新disData
		sendScMsg() {
			var vm = this;
			$.ajax({
				url:'/store/items',
				type:'get',
				data: {
					hot:vm.hot,
					priceIndex: vm.priceIndex+1,
					typeIndex: vm.typeIndex+1,
					keyword: vm.keyword
				},
				success:function(res) {
					//拼接图片地址
					for(item of res) {
						item.GoodsPicture = '/img/' + item.GoodsPicture + '.jpg'
					}
					vm.disData = res;
				}
			});
		},
		addCart() {
			var vm = this;
			$.ajax({
				url:'/store/addCart',
				type:'post',
				data: {
					id:vm.disData[vm.nowIndex].GoodsID,
					num:vm.buyNum //数据库编号从1开始,与之匹配
				},
				success:function(res) {
					alert('成功加入购物车');
				}
			});
			this.buyNum = 1;
		}
	},
	created:function() {
		var vm = this;
		$.ajax({
			url: '/store/items',
			success: function(res) {
				vm.disData = res;
				for(var item of vm.disData) {
					item.GoodsPicture = '/img/' + item.GoodsPicture + '.jpg';
				}
			},
			error: function(res) {
				alert('wrong');
			}
		});

	},
});

var recRegister = function () {
	var recs = document.getElementsByClassName('rec-item');
	recs[0].getElementsByClassName('left')[0].style.width = 300 + 'px';
	recs[0].onmouseenter = function() {
		this.style.left = 0 + 'px';
		recs[1].style.left = 800 + 'px';
		recs[2].style.left = 1000 + 'px';
		this.getElementsByClassName('left')[0].style.width = 300 + 'px';
		this.getElementsByClassName('right')[0].style.opacity = 1;

		recs[1].getElementsByClassName('left')[0].style.width = 200 + 'px';
		recs[2].getElementsByClassName('left')[0].style.width = 200 + 'px';
		recs[1].getElementsByClassName('right')[0].style.opacity = 0;
		recs[2].getElementsByClassName('right')[0].style.opacity = 0;
	}
	recs[1].onmouseenter = function() {
		this.style.left = 200 + 'px';
		recs[0].style.left = 0 + 'px';
		recs[2].style.left = 1000 + 'px';
		this.getElementsByClassName('left')[0].style.width = 300 + 'px';
		this.getElementsByClassName('right')[0].style.opacity = 1;

		recs[0].getElementsByClassName('left')[0].style.width = 200 + 'px';
		recs[2].getElementsByClassName('left')[0].style.width = 200 + 'px';
		recs[0].getElementsByClassName('right')[0].style.opacity = 0;
		recs[2].getElementsByClassName('right')[0].style.opacity = 0;

	}
	recs[2].onmouseenter = function() {
		this.style.left = 400 + 'px';
		recs[0].style.left = 0 + 'px';
		recs[1].style.left = 200 + 'px';
		this.getElementsByClassName('left')[0].style.width = 300 + 'px';
		this.getElementsByClassName('right')[0].style.opacity = 1;

		recs[0].getElementsByClassName('left')[0].style.width = 200 + 'px';
		recs[1].getElementsByClassName('left')[0].style.width = 200 + 'px';
		recs[0].getElementsByClassName('right')[0].style.opacity = 0;
		recs[1].getElementsByClassName('right')[0].style.opacity = 0;
	}
}

window.onload = recRegister();