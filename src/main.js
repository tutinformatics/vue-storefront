import Vue from 'vue'
import App from './App.vue'
import "@storefront-ui/vue/styles.scss"

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { router } from './router';
import store from './_store';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';

Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
