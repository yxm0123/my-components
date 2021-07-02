import Vue from 'vue'
import App from './App.vue'
import router from './myRouter'
import store from './mystore'
import Notice from './components/Notic.vue'
import create from './utils/create.js'
Vue.prototype.$notice = function(props) {
  return create(Notice, props)
}

Vue.use(Notice)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
