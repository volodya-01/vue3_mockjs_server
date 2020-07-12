import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/http/http'; //此处问http文件的路径
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
