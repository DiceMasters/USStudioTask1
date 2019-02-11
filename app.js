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
			self.userData = data[0]
		})
		console.log(productList);
	}
})