import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import "@storefront-ui/vue/styles.scss"

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import routes from "./routes";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

const router = new VueRouter({routes});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
