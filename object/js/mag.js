jQuery.ajaxSettings.traditional = true;
var vm = new Vue({
	el: '#app',
	data: {
		goData: [
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
				introduce: 'aaaaaa',
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
	methods: {
		sbChg(index) {
			var vm = this;
			$.ajax({
				url:'/admin/chgGoods',
				success: function(res) {
					//vue因defineProperty不能动态监听数组内部变化
					//下方法为hack解决方式
					var temp = vm.goData;
					temp[index] = res;
					vm.goData = temp;
				}
			});
		}
	},
	created: function() {
		var vm = this;
		$.ajax({
			url:'/admin/getGoods',
			success: function(res) {
				vm.goData = res;
			}
		});
	}
});