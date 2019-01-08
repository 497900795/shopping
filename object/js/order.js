jQuery.ajaxSettings.traditional = true;
var vm = new Vue({
	el:'#app',
	data: {
		ordArry: [
			{
				oid:'132',
				goArry:[
					{
						gid:'1555',
						gname:'女装',
						num:'10'
					},
					{
						gid:'1555',
						gname:'女装',
						num:'10'
					},
					{
						gid:'1555',
						gname:'女装',
						num:'10'
					},
				],
				date:'23142546576'
			},
			{
				oid:'132',
				goArry:[
					{
						gid:'1555',
						gname:'女装',
						num:'10'
					},
					{
						gid:'1555',
						gname:'女装',
						num:'10'
					},
					{
						gid:'1555',
						gname:'女装',
						num:'10'
					},
				],

				date:'23142546576'
			},
			
		]
	},
	created: function() {
		var vm = this;
		$.ajax({
			url:'/store/order',
			success: function(res) {
				vm.ordArry = res;
			}
		})
	}
});