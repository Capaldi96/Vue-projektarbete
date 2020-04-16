import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);

let globalData = new Vue({
  data:{ isLoggedIn:false }
})
Vue.mixin({
  computed:{
      isLoggedIn:{
          get: function(){ return globalData.$data.isLoggedIn},
          set: function(state){ globalData.$data.isLoggedIn = state }
      }
  }
})
Vue.component('list-component');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
