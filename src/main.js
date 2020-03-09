import Vue from 'vue'
import router from 'views/router'
import store from 'views/store'
import vantList from 'lib/vant'
import directiveList from 'views/plugins/directive'
import App from '@/App.vue'

vantList.forEach(vant => (Vue.use(vant)))
directiveList.forEach(ele => (Vue.directive(ele.name, ele.directive)))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
