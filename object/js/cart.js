jQuery.ajaxSettings.traditional = true;
var vm = new Vue ({
	el:'#app',
	data: {
		ordData: [
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,				
				imgSrc: 'xxx.jpg',
				ensure: true
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: true
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
			{
				id: 123,
				name: 456,
				date: 789,
				price: 100,
				num:200,
				imgSrc: 'xxx.jpg',
				ensure: false
			},
		]
	},
	methods: {
		payGoods() {
			var vm = this;
			var payList = [];
			for(var item of this.ordData) {
				if(item.ensure == true) {
					payList.push(item.id);
				}
			}
			$.ajax({
				url: '/store/payCart',
				type: 'post',
				data: payList,
				success: function(res) {
					vm.ordData = res;
				}
			})
		}
	},
	created: function() {
		var vm = this;
		$.ajax({
			url: '/store/getCart',
			type: 'post',
			success: function(res) {
				vm.ordData = res;
			}
		})
	}
});


