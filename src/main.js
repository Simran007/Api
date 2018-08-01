import Vue from 'vue'
import rats from './components/Api.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(rats)
}).$mount('#app')
