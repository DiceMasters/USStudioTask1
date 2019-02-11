Vue.component('good', {
	template: '#good-template'
})

new Vue({
	el: '#app',
	data: {
		productList: []
	},
	mounted(){
		var self = this
		$.getJSON('products.jsonp', function(data){
			self.productList = data[0]
		})
		console.log(self.productList);
	}
})