var dataURL = 'https://raw.githubusercontent.com/DiceMasters/USStudioTask1/master/products.json'

Vue.component('good', {
	props: ['name', 'description', 'photo', 'price'],
  template: '#good-template'
})

new Vue({
	el: '#app',
  data: {
  	buttonText: 'Без сортировки',
    sortMode: 'deft',
		productData: []
	},
  methods: {
    sort(data){
      switch (this.sortMode){
      	case 'descending':
        	data.sort( function(obj1, obj2){
            return obj1.price-obj2.price
          })
          this.buttonText = 'По убыванию'
          this.sortMode = 'ascending'
        	break
        case 'ascending':
        	data.sort( function(obj1, obj2){
            return obj2.price-obj1.price
          })
          this.buttonText = 'По возрастанию'
          this.sortMode = 'descending'
        	break
        default:
        	data.sort( function(obj1, obj2){
            return obj1.price-obj2.price
          })
          this.buttonText = 'По убыванию'
          this.sortMode = 'ascending'
        	break
      }
    }
  },
	created(){
  	var self = this
    
    fetch(dataURL)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        self.productData = data
      })
	}
})