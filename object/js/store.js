jQuery.ajaxSettings.traditional = true;
var vm = new Vue({
	el:'#app',
	data: {
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
			{
				id: 'rjynb',
				name: '女装',
				price: '100',
				sells: '666',
				introduce: 'aaaaaa',
				imgSrc: 'xxx.jpg'
			},
			{
				id: 'rjynb',
				name: '女装',
				price: '100',
				sells: '666',
				introduce: 'bbbbb',
				imgSrc: 'xxx.jpg'
			},
			{
				id: 'rjynb',
				name: '女装',
				price: '100',
				sells: '666',
				introduce: 'cccc',
				imgSrc: 'xxx.jpg'
			},
			{
				id: 'rjynb',
				name: '女装',
				price: '100',
				sells: '666',
				introduce: 'aaaaaa',
				imgSrc: 'xxx.jpg'
			},
		],
	},
	methods : {
		logout() {
			$.ajax({
				url:'/users/logout',
				type:'jsonp',
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
					priceIndex: vm.priceIndex,
					typeIndex: vm.typeIndex,
					keyword: vm.keyword
				},
				success:function(res) {
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
					id:vm.disData[vm.nowIndex].id,
					num:vm.buyNum
				},
				success:function(res) {
					alert('成功加入购物车');
				}
			});
			this.buyNum = 1;
		}
	},
	computed: {
		totMoney() {	
			return this.buyNum * this.disData[this.nowIndex]['price'];
		}
	}
	/*created {
		var vm = this;
		$.ajax({
			url: '/store/items',
			success(res) {
				vm.disData = res;
			}
		});
	},*/
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

recRegister();