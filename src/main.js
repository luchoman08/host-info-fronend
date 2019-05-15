import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueFlex from "vue-flex";
import Loading from "vue-loading-overlay";
import "./styles.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
Vue.config.productionTip = false;
Vue.use(Loading);
Vue.use(BootstrapVue);
Vue.use(VueFlex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
