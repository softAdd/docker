import Vue from 'vue'
import router from './router'
import Example from './Example.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Example)
}).$mount('#app')
