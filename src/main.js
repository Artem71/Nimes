import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import priceFilter from './filters/price.filter'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.filter('price', priceFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
