Vue.component('good', {
	template: '#good-template',
	data: {
		goods: JSON.parse('productList')
	}
})

new Vue({
	el: '#app',
	data: {
	}
})