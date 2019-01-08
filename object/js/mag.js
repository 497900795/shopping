jQuery.ajaxSettings.traditional = true;
var vm = new Vue({
	el: '#app',
	data: {
		selID:'',
		nowIndex:0,
		goData: [
			
		],
	},
	methods: {
		selGoods() {
			var vm = this;
			$.ajax({
				url:'/admin/selGoods',
				type: 'post',
				data: {
					GoodsID:vm.selID
				},
				success: function(res) {
					vm.goData = res;
				}
			});
		},
		sbChg() {
			var vm = this;
			$.ajax({
				url:'/admin/chgGoods',
				type: 'post',
				data: {
						CategoryID: vm.goData[vm.nowIndex]['CategoryID'],
						GoodsDescription:vm.goData[vm.nowIndex]['GoodsDescription'],
						GoodsID: vm.goData[vm.nowIndex]['GoodsID'],
						GoodsName: vm.goData[vm.nowIndex]['GoodsName'], 
						GoodsPicture: vm.goData[vm.nowIndex]['GoodsPicture'],
						GoodsPrice: vm.goData[vm.nowIndex]['GoodsPrice'],
						GoodsSales: vm.goData[vm.nowIndex]['GoodsSales']
				},
				success: function(res) {
					//vue因defineProperty不能动态监听数组内部变化
					//下方法为hack解决方式
					var temp = vm.goData;
					temp[vm.nowIndex] = res;
					vm.goData = temp;

					alert('修改成功');
				}
			});
		}
	},
	created: function() {
		var vm = this;
		$.ajax({
			url:'/admin/getGoods',
			type: 'get',
			success: function(res) {
				vm.goData = res;
			}
		});
	}
});