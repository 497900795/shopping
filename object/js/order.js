jQuery.ajaxSettings.traditional = true;
var vm = new Vue({
	el:'#app',
	data: {
		ordArry: [
			
		]
	},
	filters: {
		parseDate(ival) {
			//获取 T 前的日期
			return ival.split('T')[0];
		}
	},
	created: function() {
		var vm = this;
		$.ajax({
			url:'/store/getOrder',
			type:'get',
			success: function(res) {
				console.log(res)
				vm.ordArry = res;
			}
		})
	}
});