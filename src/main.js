import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import 'bootstrap/dist/js/bootstrap.min'
// Components
import f2e from './components/autoload.js'
f2e.getName()
Vue.use(f2e)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
