import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vantList from 'lib/vant';
import directiveList from 'directives'

vantList.forEach(vant => (Vue.use(vant)));
directiveList.forEach(ele => (Vue.directive(ele.name, ele.directive)))

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
