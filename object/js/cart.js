jQuery.ajaxSettings.traditional = true;
var vm = new Vue ({
	el:'#app',
	data: {
		ordData: [
			
		]
	},
	methods: {
		logout() {
			$.ajax({
				url:'/users/logout',
				type:'get',
				success:function() {
					alert('成功登出')
				}
			});
		},
		removeGoods(i) {
			var vm = this;
			$.ajax({
				url:'/store/remGoods',
				type:'post',
				data: {
					delID:vm.ordData[i].GoodsID
				},
				success:function(res) {
					vm.ordData.splice(i,1);
				}
			});
		}
		,
		payGoods() {
			var vm = this;
			var payList = [];
			for(var item of this.ordData) {
				payList.push(item.id);
			}
			$.ajax({
				url: '/store/payCart',
				type: 'post',
				data: payList,
				success: function(res) {
					if(res.errcode == 0) {
						vm.ordData = [];
						alert('成功支付');
					}
					else {
						alert(res.errmsg);
					}
				}
			})
		}
	},
	created: function() {
		var vm = this;
		$.ajax({
			url: '/store/getCart',
			type: 'get',
			success: function(res) {
				if(res.length != 0) {
					vm.ordData = res;
					for(var item of vm.ordData) {
						item.GoodsPicture = '/img/' + item.GoodsPicture + '.jpg'
					}
				}
			}
		})
	}
});


