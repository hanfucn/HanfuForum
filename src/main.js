import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import iView from 'iview'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.less';

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

