Vue.component('good', {
	template: '#good-template'
})

new Vue({
	el: '#app',
	data: {
		productList: []
	},
	mounted(){
		$.getJSON('products.jsonp', function(data){
			productList = data[0]
		})
		console.log(productList)
	}
})