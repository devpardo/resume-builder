import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin, BootstrapVueIcons} from 'bootstrap-vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 105162245222263, //  change 'null' to your Facebook Page ID,
  theme_color: '#ffc107', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
